const express = require('express');
const router = express.Router();
const {verifyToken, checkAdmin} = require("../middleware/authMiddleware.js");

const {getFilteredUsers, updateUserStatus} = require('../controller/adminController.js');

router.get("/users",verifyToken, checkAdmin, getFilteredUsers);
router.patch('/users/:id/status', verifyToken, checkAdmin, updateUserStatus);

module.exports = router;