const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);