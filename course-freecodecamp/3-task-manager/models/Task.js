const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    require: [true, "Please provide a task name"],
    trim: true,
    maxLength: [40, "Task name cannot be more than 40 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
