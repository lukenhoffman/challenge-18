Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
});

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use('/api', routes);

// MongoDB connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/challenge-18', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.error(`Mongoose connection error: ${err}`));
dbConnection.once('open', () => console.log('Mongoose connected successfully.'));
mongoose.set('debug', true);

// Error handling
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
    res.status(500).send(err.message);
  } else {
    res.status(500).send('Something broke!');
  }
});

app.listen(PORT, () => {
    console.log(`🌍 Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    dbConnection.close(() => {
        console.log("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});
