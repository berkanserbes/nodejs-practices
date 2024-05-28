const { Router } = require("express");
const router = new Router();

const { login, dashboard } = require("../controller/mainController");

const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;
