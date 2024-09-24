const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Adjust the path as needed

mongoose.connect('mongodb://127.0.0.1:27017/miller-project')

// Seed data
const seedUsers = async () => {
    const user = new User({
        username: 'zhibet12',
        password: 'zhibet23@', // This will be hashed
    });

    try {
        await user.save();
        console.log('User saved:', user);
    } catch (err) {
        console.error('Error saving user:', err);
    } finally {
        mongoose.connection.close();
    }
};

// Run the seed function
seedUsers();
