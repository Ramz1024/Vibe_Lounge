const express = require('express');
const router = express.Router();

<<<<<<< HEAD
// Import controller functions
const { getAllUsers, deleteUser, banUser, unbanUser } = require('../controller/adminController');

// Get all users
router.get('/users', getAllUsers);

// Delete user by ID
router.delete('/users/:id', deleteUser);

// Ban user by ID (set role to 'ban')
router.put('/users/:id/ban', banUser);

// Unban user by ID (set role back to 'user')
router.put('/users/:id/unban', unbanUser);

module.exports = router;
=======
const {getFilteredUsers} = require('../controller/adminController.js');

router.get("/users", getFilteredUsers);

module.exports = router;
>>>>>>> 550c93aa5124631c2dff087b26ebd8085a9af05c
