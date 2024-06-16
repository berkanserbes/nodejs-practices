const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'], // Custom error message for required field
        minLength: [6, `Must be at least 6 characters, you entered {VALUE}`],
        maxLength: 50, 
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [6, 'Password must be at least 6 characters long'],
    }
});

module.exports = mongoose.model("User", userSchema);