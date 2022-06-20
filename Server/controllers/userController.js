const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// @desc    Register new user
// @route   POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  if (!req.body.userType) {
    res.status(400)
    throw new Error('Please add a UserType field')
  }

  if (!req.body.email) {
    res.status(400)
    throw new Error('Please add a email field')
  }

  if (!req.body.password){
    res.status(400)
    throw new Error('Please add a password field')
  }
  const user = await User.create({
    userType: req.body.userType,
    email: req.body.email,
    password: req.body.email
  });
  res.json({ message: 'Register User' })
})
  
// @desc    Authenticate a user
// @route   POST /users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (user ) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users)
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}