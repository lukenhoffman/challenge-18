// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 27017;

// MongoDB connection configuration
const MONGO_URI = 'mongodb://localhost:27017';

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Set up middleware to parse JSON
app.use(express.json());

// Register API routes
app.use(routes);

// Start the server and listen on the designated port
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
