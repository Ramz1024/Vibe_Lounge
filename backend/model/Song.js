const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true
  },
  roomName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
