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
    User.findByIdAndUpdate(
        params.id, // Find user by their ID
        { $push: { friends: params.friendId } }, // Push friend's ID to user's friends array
        { new: true, runValidators: true } // Return updated user and run validations
    )
    .populate({
        path: 'friends',
        select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.json(err));
},

// Remove a friend from a user's friend list
removeFriend({ params }, res) {
    User.findByIdAndUpdate(
        params.id, // Find user by their ID
        { $pull: { friends: params.friendId } }, // Pull friend's ID from user's friends array
        { new: true, runValidators: true } // Return updated user and run validations
    )
    .populate({
        path: 'friends',
        select: '-__v'
    })
    .select('-__v')
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.json(err));
}

};

module.exports = userController;
