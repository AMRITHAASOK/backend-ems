//import mongoose
const mongoose = require('mongoose');
//import validator 
const validator = require('validator');
//schema creation
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw Error("Invalid email");
            }
        }
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength:10
    },
    status:{
        type: String,
        required: true,
    },
    profile:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    }

})

//create Model
const users=new mongoose.model('users',userSchema);

//export 
module.exports = users