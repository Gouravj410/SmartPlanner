const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', require('./server/routes/auth'));
app.use('/api/progress', require('./server/routes/progress'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SmartPlanner backend is running' });
});

// Serve index.html for all unmatched routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║     SmartPlanner Backend Started         ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║  Server running at: http://localhost:${PORT}  ║`);
  console.log('║  Frontend: http://localhost:3000         ║');
  console.log('║  API Base: http://localhost:3000/api     ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
});
