const express = require('express');
const router = express.Router();

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
