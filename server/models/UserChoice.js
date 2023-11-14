```javascript
const mongoose = require('mongoose');

const UserChoiceSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pathID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Path',
        required: true
    },
    dateChosen: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserChoice', UserChoiceSchema);
```