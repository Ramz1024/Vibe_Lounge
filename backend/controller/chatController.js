const User = require('../model/User');
const ChatMessage = require('../model/Chat');

const postChatMessage = async(req, res)=>{
    try{
        const {user, message, room , timestamp} = req.body;

        // We may need this in future, if any errors come by

        // const existingUser = await User.findOne({ email });
        // if (!existingUser) {
        //     return res.status(404).json({ message: 'User not found' });
        // }

        const newChatMessage = new ChatMessage({
            user, 
            message,
            room , 
            timestamp: new Date()
        });

    await newChatMessage.save();

    res.status(201).json({ message: 'Message sent successfully' });

    }catch(error){
        console.error('Chat Send Error:', error);
        res.status(500).json({ message: 'Message Could not be sent due to error' });
    }

    
};


const getChatMessages = async(req, res)=>{
    try{
        const {room} = req.params;
        const cutoffTime = new Date(Date.now() - 24*60*60*1000);
        const messages = await ChatMessage.find({room, timestamp: {$gte: cutoffTime}}).sort({timestamp: 1});    // Showing only the past 1 day's messages. Just so that, if at all the past messages are not getting deleted


        res.status(200).json({success: true, count: messages.length, room, messages});
    }catch(error){
        res.status(500).json({success: false, message: "Could not fetch messages"});
    }
};

module.exports = {postChatMessage, getChatMessages};