const { Router } = require("express");
const {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
} = require("../controllers/jobs");

const router = new Router();

router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);
router.route("/").post(createJob).get(getAllJobs);

module.exports = router;
