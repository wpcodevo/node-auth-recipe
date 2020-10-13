const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
);

const localDB = process.env.MONGODB_LOCAL;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(localDB, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected successfully on ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
