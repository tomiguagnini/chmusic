const express = require("express");
const { get_songs, get_song_id, create_song, delete_song } = require("../controllers/songs");
const { authenticate }  = require("../middleware/authenticate");
const router = express.Router();



router.get("/songs",get_songs)

router.get("/songs/:id", get_song_id)

router.post("/songs",authenticate,create_song)

router.delete("/songs/:id",authenticate,delete_song)


module.exports = router;
