const { Router } = require("express");
const router = new Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(removeUser);

module.exports = router;
