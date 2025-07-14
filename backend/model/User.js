const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    profilePic:{
        type : String,
        default: 'https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg'
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    role:{
        type: String,
        enum: ['admin', 'user', 'ban'],
        default: 'user'
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;