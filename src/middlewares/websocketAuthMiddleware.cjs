const jwt = require('jsonwebtoken');
require('dotenv').config();
const { STATUS } = require('../services/constant.service.cjs');
const User = require('../models/userSchema.cjs');

const websocketAuth = (ws, req, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    ws.close(1008, 'Unauthorized'); // Close with code 1008 (Policy Violation)
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      ws.close(1008, 'Invalid token'); // Close with code 1008 (Policy Violation)
      return;
    }

    const user = await User.findById(decoded.id);
    if (!user || user.currentToken !== token) {
      ws.close(1008, 'Token expired or invalidated'); // Close with code 1008 (Policy Violation)
      return;
    }

    req.user = user;
    next();
  });
};

module.exports = { websocketAuth };
