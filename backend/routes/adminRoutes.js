const express = require('express');
const router = express.Router();

const {getFilteredUsers} = require('../controller/adminController.js');

router.get("/users", getFilteredUsers);

module.exports = router;