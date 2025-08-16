const User = require('../model/User');
const getFilteredUsers = async(req, res) =>{
    
    const {role, banned, deleted} = req.query;

    const filter = {};

    if(role !== undefined) filter.role = role;
    if(banned !== undefined) filter.banned = banned === 'true';
    if(deleted !== undefined) filter.deleted = deleted === 'true';  
    
    try{     
        const users = await User.find(filter).select("-password");

        res.status(200).json({message: "Users fetched successfully", data: users});

    }catch(err){
        res.status(500).json({message: "Server Error", error: err.message});
    }
};

const updateUserStatus = async(req, res) =>{
    const userId = req.params.id;
    const {role, banned, deleted} = req.query;

    const updateRoleOrStatus = {};

    if (role !== undefined) updateRoleOrStatus.role = role;
    if (banned !== undefined) updateRoleOrStatus.banned = banned === 'true';
    if (deleted !== undefined) updateRoleOrStatus.deleted = deleted === 'true';


    try{
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateRoleOrStatus},
            { new: true}
        ).select( "-password" );
        if(!updatedUser){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({message: "User updated successfully", user: updatedUser});
    }
    catch(err){
        res.status(500).json({message: "Server Error", error: err.message});
    }
};

module.exports = {getFilteredUsers, updateUserStatus};