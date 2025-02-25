const express = require('express'); // Import the Express module
const router = express.Router(); // Create a new router using the express.Router() method
const {validationResult} = require('express-validator'); // Import the validationResult method from express-validator
const userController = require('../controllers/user.controller'); // Import the user controller
const { body } = require('express-validator'); // Import the body method from express-validator

router.post('/register', [
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]
, userController.registerUser); // Create a new user



module.exports = router; // Export the router module