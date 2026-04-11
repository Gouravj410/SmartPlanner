const db = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
  // Create a new user
  static async create(userData) {
    return new Promise((resolve, reject) => {
      const { firstName, lastName, email, password } = userData;

      // Hash password
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          reject(err);
          return;
        }

        const query = `
          INSERT INTO users (firstName, lastName, email, password)
          VALUES (?, ?, ?, ?)
        `;

        db.run(query, [firstName, lastName, email, hashedPassword], function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({
              id: this.lastID,
              firstName,
              lastName,
              email,
              createdAt: new Date()
            });
          }
        });
      });
    });
  }

  // Find user by email
  static async findByEmail(email) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      db.get(query, [email], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Find user by ID
  static async findById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT id, firstName, lastName, email, createdAt FROM users WHERE id = ?';
      db.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Verify password
  static async verifyPassword(plainPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainPassword, hashedPassword, (err, isMatch) => {
        if (err) {
          reject(err);
        } else {
          resolve(isMatch);
        }
      });
    });
  }

  // Update user
  static async update(id, userData) {
    return new Promise((resolve, reject) => {
      const fields = [];
      const values = [];

      for (const [key, value] of Object.entries(userData)) {
        if (value !== undefined) {
          fields.push(`${key} = ?`);
          values.push(value);
        }
      }

      if (fields.length === 0) {
        resolve(userData);
        return;
      }

      fields.push('updatedAt = CURRENT_TIMESTAMP');
      values.push(id);

      const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

      db.run(query, values, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id, ...userData });
        }
      });
    });
  }
}

module.exports = User;
