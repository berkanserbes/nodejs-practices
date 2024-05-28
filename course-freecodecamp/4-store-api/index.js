require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/config");
const productRoute = require("./routes/products");
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json()); // if we don't use this, we can't access req.body

const PORT = process.env.PORT || 5000;

app.use("/api/v1/products", productRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT} ...`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
