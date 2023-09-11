const User = require('../models/user.js');

const userController = {

    // Get all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.error(err);
                res.status(500).json(err);
            });
    },

    // Get one user by ID
    getUserById({ params }, res) {
        User.findById(params.id)
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user found with this ID!' });
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

    // Create a new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

    // Update a user by ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user found with this ID!' });
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

    // Delete a user by ID
    deleteUser({ params }, res) {
        User.findByIdAndDelete(params.id)
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user found with this ID!' });
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

    // Add a friend to a user's friend list
    addFriend({ params }, res) {
        // Implementation for adding a friend goes here
    },

    // Remove a friend from a user's friend list
    removeFriend({ params }, res) {
        // Implementation for removing a friend goes here
    }
};

module.exports = userController;
