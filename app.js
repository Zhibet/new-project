const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const ejs = require('ejs');
const engine = require('ejs-mate');
const homeRoute = require('./routes/home');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const isAuthenticated = require('./authenticated');
const deleteRoute = require('./routes/delete');
const addRoute = require('./routes/add');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/miller-project')


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: 'your_secret_key', // Change this to a strong secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to true if using HTTPS
}));

// Set up EJS as the templating engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Specify the views directory
app.use(express.static('public'));


// Welcome route
app.use('/',homeRoute)
app.use('/',loginRoute)
app.use('/',logoutRoute)
app.use('/',deleteRoute)
app.use('/',addRoute)

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
