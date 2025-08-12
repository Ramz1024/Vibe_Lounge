const User = require('../model/User');
const getFilteredUsers = async(req, res) =>{
    
    const {role, banned, deleted} = req.query;

    const filter = {};

    if(role) filter.role = role;
    if(banned) filter.banned = banned === 'true';
    if(deleted) filter.deleted = deleted === 'true';  
    
    try{     
        const users = await User.find(filter).select("-password");

        res.status(200).json({message: users});

    }catch(err){
        res.status(500).json({message: "Server Error", error: err.message});
    }
};

const updateUserStatus = async(req, res) =>{
    const {userId, role, banned, deleted} = req.query;

    const updateRoleOrStatus = {};

     if(role) filter.role = role;
    if(banned) filter.banned = banned === 'true';
    if(deleted) filter.deleted = deleted === 'true';
};

module.exports = {getFilteredUsers};