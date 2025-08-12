const express = require('express');
const router = express.Router();
const {verifyToken, checkAdmin} = require("../middleware/authMiddleware.js");

const {getFilteredUsers} = require('../controller/adminController.js');

router.get("/users",verifyToken, checkAdmin, getFilteredUsers);

module.exports = router;