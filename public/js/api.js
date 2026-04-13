// API Service Utility
const API_BASE_URL = window.location.origin + '/api';

class APIService {
  // Set token in localStorage
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  // Get token from localStorage
  static getToken() {
    return localStorage.getItem('token');
  }

  // Get default headers
  static getHeaders() {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json'
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  // Register user
  static async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Save token and user data
      this.setToken(data.token);
      localStorage.setItem('currentUser', JSON.stringify(data.user));

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Login user
  static async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Save token and user data
      this.setToken(data.token);
      localStorage.setItem('currentUser', JSON.stringify(data.user));

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Get current user
  static async getCurrentUser() {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: this.getHeaders()
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get user');
      }

      return data.user;
    } catch (error) {
      throw error;
    }
  }

  // Get user progress
  static async getProgress() {
    try {
      const response = await fetch(`${API_BASE_URL}/progress`, {
        method: 'GET',
        headers: this.getHeaders()
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get progress');
      }

      return data.progress;
    } catch (error) {
      throw error;
    }
  }

  // Update user progress
  static async updateProgress(progressData) {
    try {
      const response = await fetch(`${API_BASE_URL}/progress`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(progressData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update progress');
      }

      return data.progress;
    } catch (error) {
      throw error;
    }
  }

  // Logout
  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    window.location.href = '/landing.html';
  }

  // Check if user is authenticated
  static isAuthenticated() {
    return !!this.getToken();
  }
}
