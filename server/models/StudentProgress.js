const db = require('../config/database');

class StudentProgress {
  // Create or get student progress
  static async getOrCreate(userId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM student_progress WHERE userId = ?';
      db.get(query, [userId], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(row);
        } else {
          // Create new progress record
          const insertQuery = `
            INSERT INTO student_progress (userId, subject, level)
            VALUES (?, ?, ?)
          `;
          db.run(insertQuery, [userId, 'Physics', 'beginner'], function(err) {
            if (err) {
              reject(err);
            } else {
              resolve({
                id: this.lastID,
                userId,
                subject: 'Physics',
                level: 'beginner',
                masteryScore: 0,
                streak: 0,
                totalTests: 0,
                passedTests: 0
              });
            }
          });
        }
      });
    });
  }

  // Update progress
  static async update(userId, progressData) {
    return new Promise((resolve, reject) => {
      const fields = [];
      const values = [];

      for (const [key, value] of Object.entries(progressData)) {
        if (value !== undefined) {
          fields.push(`${key} = ?`);
          values.push(value);
        }
      }

      if (fields.length === 0) {
        resolve(progressData);
        return;
      }

      fields.push('updatedAt = CURRENT_TIMESTAMP');
      values.push(userId);

      const query = `UPDATE student_progress SET ${fields.join(', ')} WHERE userId = ?`;

      db.run(query, values, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(progressData);
        }
      });
    });
  }

  // Get progress by userId
  static async getByUserId(userId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM student_progress WHERE userId = ?';
      db.get(query, [userId], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
}

module.exports = StudentProgress;
