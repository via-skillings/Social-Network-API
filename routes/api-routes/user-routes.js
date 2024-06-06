const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../../controllers/user-controller');

// Get all users
router.get('/', getAllUsers);

// Get single user by _id
router.get('/:id', getUserById);

// Post new user
router.post('/', createUser);

// Put update user by _id
router.put('/:id', updateUserById);

// Delete single user by _id
router.delete('/:id', deleteUserById);

module.exports = router;