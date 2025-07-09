const rateLimit = require('express-rate-limit');
const { STATUS } = require('../services/constant.service.cjs');

// Apply to login or auth-related routes (to prevent brute-force)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    status: STATUS.TOO_MANY_REQUESTS,
    message: "Too many login attempts from this IP, please try again after 15 minutes"
  }
});

const generalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per minute
  message: {
    status: STATUS.TOO_MANY_REQUESTS,
    message: "Too many requests, please try again later"
  }
});

module.exports = { authLimiter, generalLimiter };
