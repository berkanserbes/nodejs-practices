const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.set("view engine", "ejs"); // ejs is a template engine
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(logger);

app.get("/", logger, (req, res) => {
  //res.download("server.js");
  res.render("index", { title: "Home" });
});

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
