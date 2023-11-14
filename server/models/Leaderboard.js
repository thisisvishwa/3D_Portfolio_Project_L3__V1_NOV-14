const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);