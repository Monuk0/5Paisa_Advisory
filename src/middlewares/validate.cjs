const { STATUS } = require('../services/constant.service.cjs');

// module.exports = (schema) => {
//   return (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//       return res.status(STATUS.BAD_REQUEST).json({ message: error.details[0].message });
//     }
//     next();
//   };
// };

module.exports = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(STATUS.BAD_REQUEST).json({ message: 'Request body cannot be empty' });
    }

    if (error) {
      return res.status(STATUS.BAD_REQUEST).json({
        success: false,
        message: "Validation failed",
        errors: error.details.map((d) => d.message),
      });
    }

    req[property] = value; // replace with validated values
    next();
  };
};
