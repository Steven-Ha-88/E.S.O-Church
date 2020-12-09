const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    songId: { type: Number, required: true },
    title: { type: String, required: true },
    lyrics: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Songs", songSchema);

module.exports = Song;
