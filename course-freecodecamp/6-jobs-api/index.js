require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
