```javascript
const express = require('express');
const router = express.Router();
const UserChoice = require('../models/UserChoice');

// Get user choices
router.get('/:userId', async (req, res) => {
    try {
        const userChoices = await UserChoice.find({ userId: req.params.userId });
        res.json(userChoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user choices
router.put('/:userId', async (req, res) => {
    try {
        const updatedUserChoice = await UserChoice.updateOne(
            { userId: req.params.userId },
            { $set: { choices: req.body.choices } }
        );
        res.json(updatedUserChoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
```