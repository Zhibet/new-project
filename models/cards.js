const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/miller-project')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define the card schema
const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        required: true 
    },
    description: {
        type: String,
        unique: true, 
        required: true 
    }
});

// Create the Card model
const Card = mongoose.model('Card', cardSchema);

// Export the Card model
module.exports = Card;
