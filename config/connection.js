const mongoose = require('mongoose');

// Connection URI
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/socialMediaAPI";

const connectionOptions = {
  useNewUrlParser: true, // Use the new URL parser for the connection
  useUnifiedTopology: true, // Use the new topology engine of MongoDB driver
  useCreateIndex: true, // Use `createIndex()` instead of `ensureIndex()` for automatic index builds
  useFindAndModify: false // Use native findOneAndUpdate(), it's set to false because by default Mongoose uses `findAndModify()`
};

mongoose.connect(uri, connectionOptions);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose successfully connected to ${uri}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed due to application termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;
