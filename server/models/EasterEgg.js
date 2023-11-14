```javascript
const mongoose = require('mongoose');

const EasterEggSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    easterEggID: {
        type: String,
        required: true
    },
    dateFound: {
        type: Date,
        default: Date.now
    },
    isFound: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('EasterEgg', EasterEggSchema);
```