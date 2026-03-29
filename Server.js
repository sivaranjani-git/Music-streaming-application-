const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/music");

const Song = require("./models/Song");

app.get("/songs", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

app.listen(5000, () => console.log("Server running"));
