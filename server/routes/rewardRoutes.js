```javascript
const express = require('express');
const router = express.Router();
const Reward = require('../models/Reward');
const errorHandler = require('../utils/errorHandler');

// Get all rewards
router.get('/', async (req, res) => {
    try {
        const rewards = await Reward.find();
        res.json(rewards);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Get a specific reward
router.get('/:id', async (req, res) => {
    try {
        const reward = await Reward.findById(req.params.id);
        res.json(reward);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Create a new reward
router.post('/', async (req, res) => {
    try {
        const newReward = new Reward(req.body);
        const savedReward = await newReward.save();
        res.json(savedReward);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Update a reward
router.patch('/:id', async (req, res) => {
    try {
        const updatedReward = await Reward.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(updatedReward);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Delete a reward
router.delete('/:id', async (req, res) => {
    try {
        const removedReward = await Reward.remove({ _id: req.params.id });
        res.json(removedReward);
    } catch (err) {
        errorHandler(res, err);
    }
});

module.exports = router;
```