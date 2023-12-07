const express = require("express");
const { get_songs, get_song_id, create_song } = require("../controllers/songs");
const router = express.Router();



router.get("/songs",get_songs)

router.get("/songs/:id", get_song_id)

router.post("/songs",create_song)



module.exports = router;
