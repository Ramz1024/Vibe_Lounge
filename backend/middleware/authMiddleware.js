const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "Unauthorized: No token provided"});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(401).json({message: "Invalid Token", error: err.message});
    }
};

const checkAdmin = (req, res, next) =>{
    if(req.user && req.user.role === "admin"){
        next();
    }else{
        res.status(403).json({message: "Forbidden: Admins only"});
    }
};

module.exports = {verifyToken, checkAdmin};