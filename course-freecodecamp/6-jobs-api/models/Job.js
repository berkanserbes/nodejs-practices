const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const jobSchema = new Schema({
    company: {
        type: String,
        required: [true, 'Please provide a company name'],
        maxLength: 50,
    },
    position: {
        type: String, 
        required: [true, 'Please provide a position'],
        maxLength: 50,
    },
    status: {
        type: String, 
        enum: ['pending', 'interview', 'declined'],
        default: 'pending'
    }, 
    createdBy: {
        type: mongoose.Types.ObjectId, // This is the user who created the job
        ref: 'User', // This is the model that the ObjectId refers to, in this case, the User model
        required: [true, 'Please provide a user']        
    }
}, {timestamps: true});


module.exports = mongoose.model("Job", jobSchema);
