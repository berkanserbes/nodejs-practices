const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors/index");

const getAllJobs = async (req, res) => {
  try {
    const result = await Job.find({ createdBy: req.user.userId }).sort(
      "createdAt"
    );
    res.status(StatusCodes.OK).json({ data: result, count: result.length });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

const getJob = async (req, res) => {
  try {
    const { id } = req.params; // jobId
    const { userId } = req.user;

    // One line alternative the above code -->  const {params: {id: jobId}, user: {userId}} = req;

    const result = await Job.findOne({ _id: id, createdBy: userId });

    if (!result) {
      throw new NotFoundError(`No job with id : ${id}`);
    }

    res.status(StatusCodes.OK).json({ result });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

const createJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const {
      user: { userId },
      body: { company, position, status },
      params: { id: jobId },
    } = req;

    if (company === "" || position) {
      throw new BadRequestError("Company and Position fields are required");
    }

    const updatedJob = await Job.findOneAndUpdate(
      { _id, jobId, createdBy: userId },
      { company, position, status },
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      throw new NotFoundError(`No job with id : ${jobId}`);
    }

    res.status(StatusCodes.OK).json({ updatedJob });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const {
      params: { _id: jobId },
      user: { userId },
    } = req;

    const deletedJob = await Job.findOneAndDelete({
      _id: jobId,
      createdBy: userId,
    });

    if (!deletedJob) {
      throw new NotFoundError(`No job with id : ${jobId}`);
    }

    res.status(StatusCodes.OK).json({ deletedJob });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
