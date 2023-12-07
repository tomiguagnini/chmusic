const Song = require("../models/song");

const create_song = async (req, res) => {
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

const get_song_id = async (req, res) => {
    try {
        const { id } = req.params
        const song = await Song.findByPk(id)
        const songDataWithoutFile = song.get({ plain: true, attributes: { exclude: ['File'] } });
        res.json(songDataWithoutFile)
    } catch (error) {
        console.log(error)
    }
}

const get_songs = async (req, res) => {
    try {
        const songs = await Song.findAll({
            attributes: { exclude: ['File'] }, // Excluir el campo 'File'
          });
        res.json(songs);
    } catch (error) {
        console.error("Error al obtener canciones:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}


const delete_song = async(req,res) => {
    try{
        const { id } = req.params
        const song = await Song.destroy({where: {ID:id}})
        res.json(song)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {
    create_song,
    get_song_id,
    get_songs,
    delete_song
}