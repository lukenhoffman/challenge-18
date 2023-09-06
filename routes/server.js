const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 27027;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/socialmedia', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());

// Use API Routes
app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on mongodb://localhost:27017`);
});
