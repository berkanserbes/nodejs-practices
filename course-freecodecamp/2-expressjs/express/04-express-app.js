const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("../public"));

const file = path.resolve(`${__dirname}/../navbar-app/index.html`);
console.log(file);

app.get("/", (req, res) => {
  res.sendFile(file);
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
