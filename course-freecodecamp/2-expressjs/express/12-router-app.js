const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// static assets
app.use(express.static("../public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);