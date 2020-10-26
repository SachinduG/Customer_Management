const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    unique: true,
},
Mobile_Number:{
    type: String,
    required: true,
    trim: true,
    minlength: 10,
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

module.exports = User = mongoose.model('users', UserSchema);
