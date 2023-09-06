const { Schema, model } = require('mongoose');

// User Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true
    },
    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      match: [
        /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]+$/, 
        'Please enter a valid e-mail address'
      ]
    },
    // Reference to the user's thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // Reference to the user's friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    timestamps: true  // This will add both `createdAt` and `updatedAt` fields
  }
);

// Virtual property to retrieve the length of the user's friends array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
