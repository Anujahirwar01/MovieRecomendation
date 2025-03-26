const express = require('express'); // Import the Express module
const router = express.Router(); // Create a new router using the express.Router() method
const {validationResult} = require('express-validator'); // Import the validationResult method from express-validator
const userController = require('../controllers/user.controller'); // Import the user controller
const { body } = require('express-validator'); // Import the body method from express-validator
const authMiddleware = require('../middlewares/auth.middleware'); // Import the auth middleware

router.post('/register', [
  body('email').isEmail().withMessage('Invalid email address'),

  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]
, userController.registerUser); // Create a new user

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]
, userController.loginUser); // Login a user

router.get('/profile',authMiddleware.authUser, userController.getUserProfile); // Get user profile

router.get('/logout',authMiddleware.authUser ,userController.logoutUser); // Logout a user



module.exports = router; // Export the router module