import AudioPlayer from "react-h5-audio-player";
import { useParams } from "react-router-dom";
import "react-h5-audio-player/lib/styles.css";
import { useEffect, useState } from "react";
import { getSong } from "@/services";
import { Song } from "@/types";

function MusicPlayer() {
    const { id } = useParams();
    const [song, setSong] = useState<Song>({
        ID: 0,
        Title: "",
        Artist: "",
        Price: "",
        Image: "",
        Listening: "",
        createdAt: "",
        updatedAt: "",
    });

    useEffect(() => {
        console.log(id);
        getSong(id)
            .then((r) => setSong(r.data))
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            <div className="sm:w-3/5 h-screen w-full p-4 flex flex-col gap-5 items-center">
                <div className="mt-auto">
                    <img
                        src={song?.Image}
                        alt={song?.Title}
                        className="object-cover rounded-xl max-h-96"
                    />
                </div>
                <div className="w-full mt-auto">
                    <h2 className="text-2xl ">{song.Title}</h2>
                    <p className="text-slate-500">{song.Artist}</p>
                </div>
                <div className="mb-16 w-full">
                    <AudioPlayer src={song?.Listening} className="music-player" />
                </div>
            </div>
        </>
    );
}

export default MusicPlayer;
