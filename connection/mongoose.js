const mongoose = require('mongoose')

// Loading Environment Variables

require('dotenv').config()

// Establishing Database connection

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.info('mongo-connected');
});

mongoose.connection.on("error", err => {
  console.error(`Error in connection-${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.info('Connection is disconnected');
});

process.on("SIGINT", function() {
  mongoose.connection.close(() => {
    process.exit(0);
  });
});