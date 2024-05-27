const Router = require("express").Router;
const router = new Router();
const {
  getStudentById,
  getStudents,
  createStudent,
  addStudent,
  removeStudent,
  updateStudent,
} = require("../controllers/studentController");

router.route("/").get(getStudents).post(addStudent);
router
  .route("/:id")
  .get(getStudentById)
  .delete(removeStudent)
  .put(updateStudent);

module.exports = router;
