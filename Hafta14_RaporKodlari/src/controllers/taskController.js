const Task = require("../models/Task");

const getTasks = (req, res) => {
  try {
    Task.find()
      .then((result) => {
        if (!result) {
          return res.status(404).send();
        }
        return res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const getTask = (req, res) => {
  try {
    const { id } = req.params;

    Task.findById(id)
      .then((task) => {
        if (!task) {
          return res.status(404).send();
        }
        return res.status(200).send(task);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const getUncompletedTask = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: false });
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const createTask = (req, res) => {
  try {
    const task = new Task(req.body);

    task
      .save()
      .then(() => {
        return res.status(201).send(task);
      })
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const task = req.body;

    Task.findByIdAndUpdate(id, task, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).send();
        }
        return res
          .status(200)
          .json({ task: result, message: "Task updated successfully" });
      })
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;

    Task.findByIdAndDelete(id)
      .then((result) => {
        if (!result) {
          return res.status(404).send();
        }

        return res.status(200).json({ message: "Task deleted successfully" });
      })
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
  getUncompletedTask,
};
