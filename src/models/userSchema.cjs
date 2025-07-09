const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  currentToken: { type: String, default: null }
},{ timestamps: true });

module.exports = mongoose.model('user', userSchema);
