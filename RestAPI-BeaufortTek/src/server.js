const express = require("express");
const app = express();

const studentRouter = require("./routes/studentRoute");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/students", studentRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
