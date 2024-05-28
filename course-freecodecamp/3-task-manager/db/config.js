const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    return mongoose.connect(url, {
      autoCreate: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
