const { Router } = require("express");
const router = new Router();

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getUncompletedTask,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router.route("/uncompleted").get(getUncompletedTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
