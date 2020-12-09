const router = require("express").Router();
let Song = require("../models/song.model");

//Search through Exercise collection and return all exercises.
router.route("/").get((req, res) => {
  Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const songId = req.body.songId;
  const title = req.body.title;
  const lyrics = req.body.lyrics;

  //create new Exercise instance
  const newSong = new Song({
    songId,
    title,
    lyrics,
  });

  newSong
    .save()
    .then(() => res.json("Song added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Search through Exercise collection by ID and return specific Exercise.
router.route("/:id").get((req, res) => {
  Song.findById(req.params.id)
    .then((song) => res.json(song))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.json("Song deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Song.findById(req.params.id)
    .then((song) => {
      song.songId = req.body.songId;
      song.title = req.body.title;
      song.lyrics = req.body.lyrics;

      song
        .save()
        .then(() => res.json("Song updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
