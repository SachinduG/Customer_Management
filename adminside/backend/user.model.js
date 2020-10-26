const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");

let User = new Schema({
    First_Name: {
        type: String,
        required: true,
        trim: true,
    },
    Last_Name: {
        type: String,
        required: true,
        trim: true,
    },
    Email_Address: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error("Please enter valid email address");
            }
        },
    },
    Mobile_Number:{
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
              throw new Error("Please enter valid mobile number");
            }
        },
    },
    Home_Address:{
        type: String,
        required: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true,
    }
});

// encrypt password
User.pre("save", async function (next) {
    const user = this;
    if (user.isModified("Password")) {
      user.Password = await bcrypt.hash(user.Password, 6);
    }
    next();
  });


module.exports = mongoose.model('users', User);