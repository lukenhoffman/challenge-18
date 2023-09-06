const router = require('express').Router();
const { getAllUsers, getUserById, testFunction } = require('C:/Users/Luken Hoffman/Downloads/OSU-Bootcamp/challenge-18/controllers/userController.js');
testFunction();

// Routes related to Users

// Route to GET all users
router.get('/', getAllUsers);

// Route to GET a single user by its _id
router.get('/:id', getUserById);

// TODO: Add other routes (POST, PUT, DELETE) for user management

module.exports = router;
