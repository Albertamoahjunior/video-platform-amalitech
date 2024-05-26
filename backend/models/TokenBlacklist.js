const mongoose = require('mongoose');


const TokenBlacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '3d', // Tokens will be removed automatically after 3 days
  },
});


module.exports = mongoose.model('TokenBlacklist', TokenBlacklistSchema);