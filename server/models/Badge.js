```javascript
const mongoose = require('mongoose');

const BadgeSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  badgeID: {
    type: String,
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

module.exports = mongoose.model('Badge', BadgeSchema);
```