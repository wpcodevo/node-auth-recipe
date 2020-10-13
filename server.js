const path = require('path');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  // console.log(`UNCAUGHT EXCEPTION Shutting down...`);
  // console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: path.join(__dirname, '/config/config.env') });

const app = require('./app');

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  // console.log(
  //   `Server started successfully in ${process.env.NODE_ENV} mode on port: ${PORT}`
  // );
});

process.on('unhandledRejection', () => {
  console.log(`UNHANDLED REJECTION Shutting down...`);
  server.close(() => {
    process.exit(1);
  });
});
