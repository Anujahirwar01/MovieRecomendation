const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const blacklisTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

        const { fullname, email, password } = req.body;
        // Hash the password
        const hashedPassword = await userModel.hashPassword(password);
        const user = await userService.createUser({ 
            firstname : fullname.firstname,
            lastname : fullname.lastname
            , email, 
        password :hashedPassword });
        const token = user.generateAuthToken();
        res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ errors: [{ msg: ' email or password' }] });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ errors: [{ msg: 'Invalid email or password' }] });
        }

        const token = user.generateAuthToken();
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });

        res.status(200).json({ user, token });
        next(); // Uncomment if this middleware leads to further processing.
    } catch (err) {
        console.error(err);
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
};

module.exports.getUserProfile = async (req, res,next) => {
    res.status(200).json(req.user);
};
    
module.exports.logoutUser = async (req, res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklisTokenModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
}
