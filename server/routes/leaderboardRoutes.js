```javascript
const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/Leaderboard');

// Get leaderboard
router.get('/', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ points: -1 }).limit(10);
        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user score
router.put('/:id', getUser, async (req, res) => {
    if (req.body.points != null) {
        res.user.points = req.body.points;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for getting user object by ID
async function getUser(req, res, next) {
    let user;
    try {
        user = await Leaderboard.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}

module.exports = router;
```