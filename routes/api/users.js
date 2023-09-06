const router = require('express').Router();
const { getAllUsers, getUserById } = require('../../controllers/userController');

// GET all users
router.get('/', getAllUsers);

// GET a single user by its _id
router.get('/:id', getUserById);

// Add other routes (POST, PUT, DELETE)

module.exports = router;
