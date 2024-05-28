const express = require("express");
const app = express();

// req => middleware => res

// const logger = (req, res, next) => {
//   const url = req.url;
//   const method = req.method;
//   const time = new Date().getFullYear();
//   console.log(`Url: ${url}, Method: ${method}, Time: ${time}`);
//   next();
// };
const logger = require("./logger");

app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
