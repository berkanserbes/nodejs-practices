const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  try {
    const result = await Job.find({});
    res.status(200).json({ data: result, count: result.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getJob = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createJob = async (req, res) => {};

const updateJob = async (req, res) => {};

const deleteJob = async (req, res) => {};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
