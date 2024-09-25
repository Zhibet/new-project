const express = require('express');
const cardData = require('../models/cards');
const deleteRoute = express.Router();

deleteRoute.get('/delete/:id',async (req, res) => {
    const cardId = req.params.id; 
    try {
        await cardData.findByIdAndDelete(cardId); // Delete the card
        console.log(`Card with ID ${cardId} deleted.`);
        res.redirect('/',); // Redirect to the homepage or cards list after deletion
    } catch (error) {
        console.error('Error deleting card:', error);
        res.status(500).send('Error deleting card');
    }
});

module.exports = deleteRoute;