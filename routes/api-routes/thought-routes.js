const router = require('express').Router();
const {
    getThoughts,
    getSingleThoughts,
    createThought
} = require('../../controllers/thought-controllers');

// Get all thoughts
router.get('/', getThoughts);

// Get single thought by _id
router.get('/:id', getSingleThought);

// Post new thought
router.post('/', createThought);

// Put thought user by _id
router.put('/:id', updateThoughtrById);

// Delete single thought by _id
router.delete('/:id', deleteThoughtById);

module.exports = router;