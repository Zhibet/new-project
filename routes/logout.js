const express = require('express')
const logoutRoute = express.Router()

logoutRoute.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out: ' + err.message);
        }
        res.redirect('/login',)
    });
});

module.exports = logoutRoute;