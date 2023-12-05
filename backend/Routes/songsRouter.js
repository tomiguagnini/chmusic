const express = require("express");
const router = express.Router();
const Song = require("../models/song");

// Ruta para obtener todas las canciones
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (error) {
        console.error("Error al obtener canciones:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

router.get("/songs/:id", async (req, res) => {
    try {
        const { id } = req.params
        const song = await Song.findByPk(id)
        res.json(song)
    } catch (error) {
        console.log(error)
    }
})

// Crear una nueva canción
router.post("/songs",async (req, res) => {
        try {
            const { Title, Artist, Price, Genre, Image, File, Listening } = req.body;
            
            
            const newSong = await Song.create({
              Title,
              Artist,
              Price,
              Genre,
              File,
              Image,
              Listening
            });

            res.status(201).json(newSong); // 201 significa "Creado"
        } catch (error) {
            console.error("Error al crear una nueva canción:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
);

module.exports = router;
