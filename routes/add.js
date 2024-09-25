const express = require('express');
const addRoute = express.Router();
const Card = require('../models/cards'); 

addRoute.get('/new', (req, res) => {
    const style = '/add.css';
    res.render('cardForm',{style});
});

addRoute.post('/newcard', async (req, res) => {
    const { title, description } = req.body;
    try {
        const newCard = new Card({
            title,
            description
        });
        await newCard.save();
        res.redirect('/'); 
    } catch (error) {
        console.error('Error saving card:', error);
        res.status(500).send('Internal Server Error'); 
    }
});

module.exports = addRoute;
