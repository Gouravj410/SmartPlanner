const express = require('express');
const auth = require('../middleware/auth');
const StudentProgress = require('../models/StudentProgress');

const router = express.Router();

// Get student progress
router.get('/', auth, async (req, res) => {
  try {
    const progress = await StudentProgress.getByUserId(req.userId);
    if (!progress) {
      const newProgress = await StudentProgress.getOrCreate(req.userId);
      return res.json({ progress: newProgress });
    }

    res.json({ progress });
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ error: 'Failed to fetch progress', details: error.message });
  }
});

// Update student progress
router.put('/', auth, async (req, res) => {
  try {
    const { subject, level, masteryScore, streak, totalTests, passedTests } = req.body;

    const progressData = {};
    if (subject !== undefined) progressData.subject = subject;
    if (level !== undefined) progressData.level = level;
    if (masteryScore !== undefined) progressData.masteryScore = masteryScore;
    if (streak !== undefined) progressData.streak = streak;
    if (totalTests !== undefined) progressData.totalTests = totalTests;
    if (passedTests !== undefined) progressData.passedTests = passedTests;

    const updatedProgress = await StudentProgress.update(req.userId, progressData);

    res.json({
      message: 'Progress updated successfully',
      progress: updatedProgress
    });
  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ error: 'Failed to update progress', details: error.message });
  }
});

module.exports = router;
