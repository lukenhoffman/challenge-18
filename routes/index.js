const router = require('express').Router();

// Importing specific API route files
const userRoutes = require('./api/users');
const thoughtRoutes = require('./api/thoughts');

// Routes related to Users and Thoughts

// Use userRoutes for anything starting with '/api/users'
router.use('/api/users', userRoutes);

// Use thoughtRoutes for anything starting with '/api/thoughts'
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
