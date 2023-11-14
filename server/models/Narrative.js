const mongoose = require('mongoose');

const NarrativeSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  narrativeID: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Narrative', NarrativeSchema);