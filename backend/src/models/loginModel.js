const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String, required: true }
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;