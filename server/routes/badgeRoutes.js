```javascript
const express = require('express');
const router = express.Router();
const Badge = require('../models/Badge');
const errorHandler = require('../utils/errorHandler');

// Get all badges
router.get('/', async (req, res) => {
    try {
        const badges = await Badge.find();
        res.json(badges);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Get a specific badge
router.get('/:badgeID', async (req, res) => {
    try {
        const badge = await Badge.findById(req.params.badgeID);
        res.json(badge);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Update a badge
router.put('/:badgeID', async (req, res) => {
    try {
        const updatedBadge = await Badge.updateOne(
            { _id: req.params.badgeID },
            { $set: { isUnlocked: req.body.isUnlocked } }
        );
        res.json(updatedBadge);
    } catch (err) {
        errorHandler(res, err);
    }
});

module.exports = router;
```