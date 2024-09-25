const express = require('express');
const loginRoute = express.Router();
const User = require('../models/user');

// Login GET route
loginRoute.get('/login', (req, res) => {
    const style = '/login.css';
    res.render('login',{style});
});

// Login POST route
loginRoute.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        req.session.userId = user._id; // Store user ID in session
        req.session.username = user.username;
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error logging in: ' + error.message);
    }
});

module.exports = loginRoute;
