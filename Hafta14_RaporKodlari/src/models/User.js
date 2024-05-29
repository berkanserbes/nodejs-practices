const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const UserSchema = new Schema({
    name:{
        type: String, 
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: false,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Age must be a positive number");
            }  
        }
    },
    email: {
        type: String, 
        required: true, 
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    telephone: {
        type: String,
        required: false,
        validate(value) {
            if(!validator.isMobilePhone(value)) {
                throw new Error("Phone number is invalid");
            }
        }
    },
    
});

module.exports = mongoose.model("User", UserSchema)