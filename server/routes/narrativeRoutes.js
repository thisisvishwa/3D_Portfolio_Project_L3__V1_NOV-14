const express = require('express');
const router = express.Router();
const Narrative = require('../models/Narrative');
const errorHandler = require('../utils/errorHandler');

// Get narrative by user ID
router.get('/:userID', async (req, res) => {
    try {
        const narrative = await Narrative.findOne({ userID: req.params.userID });
        if (!narrative) {
            return res.status(404).json({ message: 'Narrative not found' });
        }
        res.json(narrative);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Update narrative by user ID
router.put('/:userID', async (req, res) => {
    try {
        const updatedNarrative = await Narrative.findOneAndUpdate(
            { userID: req.params.userID },
            req.body,
            { new: true }
        );
        if (!updatedNarrative) {
            return res.status(404).json({ message: 'Narrative not found' });
        }
        res.json(updatedNarrative);
    } catch (err) {
        errorHandler(err, res);
    }
});

module.exports = router;