import { useEffect, useState } from "react";
import { Song } from "../../types";
import { getSongs } from "../../services";

const Allsongs = () => {
    const [songs, setSongs] = useState<Array<Song>>([]);
    useEffect(() => {
        getSongs()
        .then((r) => setSongs(r.data))
        .catch((error)=> console.log(error))
    }, []);

    return (
        <div className="common-container">
            <h1 className=" text-3xl">Allsongs</h1>

            <br></br>
            <ul>
                {songs?.map((s: Song) => {
                    return (
                        <li key={s.ID}>{`${s.Title}, ${s.Artist}, ${s.Price}`}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Allsongs;
