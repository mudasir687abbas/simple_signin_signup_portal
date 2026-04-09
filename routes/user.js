const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

// @route   GET /api/user/me
// @desc    Get current logged-in user
// @access  Private
router.get('/me', protect, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      createdAt: req.user.createdAt,
    },
  });
});

// @route   GET /api/user/dashboard
// @desc    Dashboard data (protected)
// @access  Private
router.get('/dashboard', protect, (req, res) => {
  res.json({
    success: true,
    message: `Welcome to your dashboard, ${req.user.name}!`,
    stats: {
      totalLogins: Math.floor(Math.random() * 50) + 1,
      lastLogin: new Date().toISOString(),
      accountAge: Math.floor(
        (Date.now() - new Date(req.user.createdAt).getTime()) / (1000 * 60 * 60 * 24)
      ) + ' days',
    },
  });
});

module.exports = router;
