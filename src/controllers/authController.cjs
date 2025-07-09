const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { STATUS }  = require('../services/constant.service.cjs');
const User  = require('../models/userSchema.cjs');
const logger = require('./../utils/logger.cjs');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.error(`${STATUS.CONFLICT} ${email} is already exists`);
      return res.status(STATUS.CONFLICT).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password:hashedPassword, role });
    res.status(STATUS.CREATED).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Server error', error: err.message });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    logger.info(`Login attempt: ${email}`);
    const user = await User.findOne({ email });

  if (!user) return res.status(STATUS.UNAUTHORIZED).json({ message: 'User Not Found' });

    const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(STATUS.UNAUTHORIZED).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "2h" } );
  user.currentToken = token;
  await user.save();
   logger.info(`${email} Login successfully!`);
  res.json({ token });
};