```javascript
const express = require('express');
const router = express.Router();
const EasterEgg = require('../models/EasterEgg');

// Get all Easter eggs
router.get('/', async (req, res) => {
    try {
        const easterEggs = await EasterEgg.find();
        res.json(easterEggs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one Easter egg
router.get('/:id', getEasterEgg, (req, res) => {
    res.json(res.easterEgg);
});

// Create one Easter egg
router.post('/', async (req, res) => {
    const easterEgg = new EasterEgg({
        userID: req.body.userID,
        easterEggID: req.body.easterEggID,
        dateFound: req.body.dateFound,
        isFound: req.body.isFound
    });

    try {
        const newEasterEgg = await easterEgg.save();
        res.status(201).json(newEasterEgg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getEasterEgg(req, res, next) {
    let easterEgg;
    try {
        easterEgg = await EasterEgg.findById(req.params.id);
        if (easterEgg == null) {
            return res.status(404).json({ message: 'Cannot find Easter egg' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.easterEgg = easterEgg;
    next();
}

module.exports = router;
```