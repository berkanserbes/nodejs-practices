require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const router = require("./routes/mainRoute");

// Middlewares
const notFoundMiddlaware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", router);

app.use(notFoundMiddlaware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
