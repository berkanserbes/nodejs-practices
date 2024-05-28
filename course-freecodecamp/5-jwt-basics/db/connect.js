const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
