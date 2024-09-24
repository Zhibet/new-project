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

// Function to add sample data
const addSampleData = async () => {
    try {
        const sampleCards = [
            { title: "First Card", description: "This is the first sample card." },
            { title: "Second Card", description: "This is the second sample card." },
            { title: "Third Card", description: "This is the third sample card." }
        ];

        // Optionally clear the collection before adding new data
        await Card.deleteMany({});
        console.log('Database cleared');

        // Insert the sample data into the Card collection
        await Card.insertMany(sampleCards);
        console.log('Sample data added successfully');
    } catch (error) {
        console.error('Error adding sample data:', error);
    }
};

// Run the function to add sample data
addSampleData();

// Export the Card model
module.exports = Card;
