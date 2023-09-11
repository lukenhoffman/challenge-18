const router = require('express').Router();

const userRoutes = require('./api/user-route.js');
const thoughtRoutes = require('./api/thought-route.js');

// Prefix all routes defined in userRoutes with `/users`
router.use('/users', userRoutes);

// Prefix all routes defined in thoughtRoutes with `/thoughts`
router.use('/thoughts', thoughtRoutes);

module.exports = router;
