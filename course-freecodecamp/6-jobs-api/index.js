require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const authRoute = require("./routers/auth");
const jobRoute = require("./routers/jobs");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authenticateMiddleware = require("./middlewares/authentication");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", authenticateMiddleware, jobRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
