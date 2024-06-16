const { Router } = require("express");

const { login, register } = require("../controllers/auth");

const router = new Router();

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
