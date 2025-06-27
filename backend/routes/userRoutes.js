const express = require('express');
const router = express.Router();
const User = require('../model/User');

const {registerUser,loginUser} = require('../controller/userController');// I will be getting functions from this.

// Api for register 

router.post('/register',registerUser);

// Api for login

router.post('/login', loginUser);

module.exports = router;