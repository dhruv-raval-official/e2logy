const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
const User = mongoose.model('User', userSchema);
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
app.post('/users', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User saved successfully', user });
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ error: 'Failed to save user' });
    }
});
app.listen(3000, () => console.log('Server running on port 3000'));