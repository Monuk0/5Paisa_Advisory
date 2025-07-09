const jwt = require('jsonwebtoken');
require('dotenv').config();
const { STATUS } = require('../services/constant.service.cjs');
const User = require('../models/userSchema.cjs');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(STATUS.UNAUTHORIZED).json({ message: "No token provided" });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(STATUS.UNAUTHORIZED).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded.id);
    if(!user || user.currentToken !== token){
      return res.status(STATUS.UNAUTHORIZED).json({ message: "Token expired or invalidated" });
    }

    req.user = decoded;
    next();
  });
};
