const { STATUS } = require('../services/constant.service.cjs');


// module.exports = (requiredRole) => {
//   return (req, res, next) => {
//     if (!req.user || req.user.role !== requiredRole) {
//       return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
//     }
//     next();
//   };
// };

module.exports = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(STATUS.FORBIDDEN).json({ message: 'Access denied: insufficient permissions' });
    }
    next();
  };
};