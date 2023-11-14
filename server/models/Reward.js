```javascript
const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    badgeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Badge',
        required: true
    },
    dateEarned: {
        type: Date,
        default: Date.now
    },
    isUnlocked: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Reward', RewardSchema);
```