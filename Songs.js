const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
  file: String
});

module.exports = mongoose.model("Song", SongSchema);
