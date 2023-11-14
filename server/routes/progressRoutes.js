const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Get user progress
router.get('/:userId', async (req, res) => {
    try {
        const progress = await Progress.findOne({ userID: req.params.userId });
        if (!progress) {
            return res.status(404).json({ message: 'No progress found for this user' });
        }
        res.json(progress);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user progress
router.put('/:userId', async (req, res) => {
    try {
        const updatedProgress = await Progress.updateOne(
            { userID: req.params.userId },
            { $set: { progress: req.body.progress } }
        );
        if (updatedProgress.nModified == 0) {
            return res.status(404).json({ message: 'No progress found for this user' });
        }
        res.json({ message: 'Progress updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;