require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// security packages
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Routers
const authRoute = require("./routers/auth");
const jobRoute = require("./routers/jobs");

// Middlewares
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authenticateMiddleware = require("./middlewares/authentication");

app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 150, // limit each IP to 150 requests per windowMs
  })
);
app.use(helmet());
app.use(cors());

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
