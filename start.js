#!/usr/bin/env node

/**
 * SmartPlanner - Startup Script
 * Initializes database and starts the learning system
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = __dirname;
const dbPath = path.join(projectRoot, 'database', 'smartplanner.db');
const nodeModulesPath = path.join(projectRoot, 'node_modules');

// Terminal colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// Check and install dependencies
function setupDependencies() {
  if (!fs.existsSync(nodeModulesPath)) {
    log(colors.yellow, 'Installing dependencies...');
    try {
      execSync('npm install', { stdio: 'inherit', cwd: projectRoot });
      log(colors.green, '✓ Dependencies installed');
    } catch (error) {
      log(colors.yellow, '✗ Failed to install dependencies');
      process.exit(1);
    }
  } else {
    log(colors.green, '✓ Dependencies already installed');
  }
}

// Initialize database if needed
function setupDatabase() {
  if (!fs.existsSync(dbPath)) {
    log(colors.yellow, 'Initializing database...');
    try {
      execSync('node database/init.js', { stdio: 'inherit', cwd: projectRoot });
      log(colors.green, '✓ Database initialized');
    } catch (error) {
      log(colors.yellow, '✗ Failed to initialize database');
      process.exit(1);
    }
  } else {
    log(colors.green, '✓ Database already initialized');
  }
}

// Display startup information
function showStartupInfo() {
  console.log('');
  console.log(colors.bright + '╔═══════════════════════════════════════════════════╗');
  console.log('║            SETUP COMPLETE!                        ║');
  console.log('╚═══════════════════════════════════════════════════╝' + colors.reset);
  console.log('');
  
  log(colors.cyan, 'URLs:');
  log(colors.cyan, '   Frontend:  http://localhost:3000');
  log(colors.cyan, '   API:       http://localhost:3000/api');
  console.log('');

  log(colors.cyan, 'Quick Access:');
  log(colors.cyan, '   Landing:   http://localhost:3000/landing.html');
  log(colors.cyan, '   Register:  http://localhost:3000/register.html');
  log(colors.cyan, '   Login:     http://localhost:3000/login.html');
  log(colors.cyan, '   Dashboard: http://localhost:3000/index.html');
  console.log('');

  log(colors.cyan, 'API Endpoints:');
  log(colors.cyan, '   POST /api/auth/register  - Register new user');
  log(colors.cyan, '   POST /api/auth/login     - Login user');
  log(colors.cyan, '   GET  /api/auth/me        - Get current user');
  log(colors.cyan, '   GET  /api/progress       - Get user progress');
  log(colors.cyan, '   PUT  /api/progress       - Update user progress');
  console.log('');

  log(colors.cyan, 'Test Account:');
  log(colors.cyan, '   Email:    demo@example.com');
  log(colors.cyan, '   Password: password123');
  console.log('');
}

// Main startup
console.log('\n' + colors.bright);
console.log('╔═══════════════════════════════════════════════════╗');
console.log('║         SmartPlanner Startup                      ║');
console.log('║     Adaptive Learning System                      ║');
console.log('╚═══════════════════════════════════════════════════╝');
console.log(colors.reset + '\n');

log(colors.cyan, 'Checking prerequisites...\n');
setupDependencies();
setupDatabase();

showStartupInfo();
log(colors.bright + colors.green, 'Starting SmartPlanner Backend Server...\n' + colors.reset);

// Load and start the app
require('./app.js');
