const router = require('express').Router();

const userRoutes = require('./api/users');
const thoughtRoutes = require('./api/thoughts');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;
