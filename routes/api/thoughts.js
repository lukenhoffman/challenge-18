const router = require('express').Router();
const { getAllThoughts, getThoughtById } = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', getAllThoughts);

// GET a single thought by its _id
router.get('/:id', getThoughtById);

// Add other routes (POST, PUT, DELETE)

module.exports = router;
