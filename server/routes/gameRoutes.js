```javascript
const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Get all games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one game
router.get('/:id', getGame, (req, res) => {
    res.json(res.game);
});

// Create one game
router.post('/', async (req, res) => {
    const game = new Game({
        userID: req.body.userID,
        gameID: req.body.gameID,
        score: req.body.score,
        datePlayed: req.body.datePlayed
    });

    try {
        const newGame = await game.save();
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one game
router.patch('/:id', getGame, async (req, res) => {
    if (req.body.score != null) {
        res.game.score = req.body.score;
    }
    try {
        const updatedGame = await res.game.save();
        res.json(updatedGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one game
router.delete('/:id', getGame, async (req, res) => {
    try {
        await res.game.remove();
        res.json({ message: 'Deleted Game' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getGame(req, res, next) {
    let game;
    try {
        game = await Game.findById(req.params.id);
        if (game == null) {
            return res.status(404).json({ message: 'Cannot find game' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.game = game;
    next();
}

module.exports = router;
```