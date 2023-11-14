```javascript
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gameID: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    datePlayed: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Game', GameSchema);
```