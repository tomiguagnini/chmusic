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
        File: "",
        Listening: "",
        createdAt: "",
        updatedAt: "",
    });

    useEffect(() => {
        console.log(id);
        getSong(id).then((r) => {
            setSong(r.data);
        });
    }, [id]);


    return (
        <>
            <div className="sm:w-3/5 h-screen w-full m-4 mt-16">
                <div className="flex justify-center h-4/5 pb-1 ">
                    <img
                        src={song.Image}
                        alt={song.Title}
                        className="object-cover w-full"
                    />
                </div>
                <AudioPlayer src={song.Listening} autoPlay />
            </div>
        </>
    );
}

export default MusicPlayer;