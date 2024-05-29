require("dotenv").config();
const express = require("express");
const app = express();
const { connect } = require("./db/config");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");

app.use(express.json());

app.use("/users", userRoute);
app.use("/tasks", taskRoute);

const connectDB = async () => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
};

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
