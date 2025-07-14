const express = require('express');
const router = express.Router();

// Import chat controllers (your teammate will write these functions)
const { postChatMessage, getChatMessages } = require('../controller/chatController');

// Post a new chat message (only for registered users)
router.post('/sendMessage', postChatMessage);

// Get all chat messages
router.get('/chat', getChatMessages);

module.exports = router;
