require("dotenv").config();

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return console.log("Please provide username and password");
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res
      .status(200)
      .json({ isSuccess: true, msg: `${username} logged in - ${token}` });
  } catch (err) {
    console.log(err.message);
  }
};

const dashboard = async (req, res) => {
  try {
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({
      msg: `Hello ${req.user.username}`,
      secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { login, dashboard };
