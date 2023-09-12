const { Thought } = require('../models/thought.js');
const { User } = require('../models/user.js');

console.log(Thought);


const thoughtController = {
    
    // Get all thoughts
    getAllThoughts(res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.error(err);
                res.status(500).json(err);
            });
    },

    // Get one thought by ID
    getThoughtById({ params }, res) {
        Thought.findById(params.id)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought found with this ID!' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

// Create a new thought
createThought({ body }, res) {
    console.log("Creating thought with data:", body);

    Thought.create(body)
        .then(dbThoughtData => {
            console.log("Thought created:", dbThoughtData);

            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                console.log("No user found with ID:", body.userId);
                return res.status(404).json({ message: 'No user found with this ID!' });
            }
            res.json({ message: "Thought successfully added!", dbUserData });
        })
        .catch(err => {
            console.error("Error while creating thought:", err);
            res.status(500).json(err);
        });
},

    // Update a thought by ID
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought found with this ID!' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

    // Delete a thought by ID
    deleteThought({ params }, res) {
        Thought.findByIdAndDelete(params.id)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought found with this ID!' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.error(err);
                res.status(400).json(err);
            });
    },

    // Add a reaction to a thought
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought found with this ID!' });
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        });
    },

    // Remove a reaction from a thought
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought found with this ID!' });
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        });
    }
};

module.exports = thoughtController;
