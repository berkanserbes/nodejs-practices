require("dotenv").config();
const mongoose = require("mongoose");

const CONNECTION_STRING = process.env.CONNECTION_URL;

const connect = () => {
  try {
    mongoose
      .connect(CONNECTION_STRING)
      .then(() => {
        console.log("Connected to the database");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
