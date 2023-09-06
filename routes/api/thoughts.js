const router = require('express').Router();
const { getAllThoughts, getThoughtById } = require('../../controllers/thoughtController');

// Routes related to Thoughts

// Route to GET all thoughts
router.get('/', getAllThoughts);

// Route to GET a single thought by its _id
router.get('/:id', getThoughtById);

// TODO: Add other routes (POST, PUT, DELETE) for thought manipulation

module.exports = router;
