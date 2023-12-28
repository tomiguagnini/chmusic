import CardShop from "@/components/shared/CardShop";
import { getSongs } from "@/services";
import { Song } from "@/types";
import { useState, useEffect } from "react";

function CardContainer() {
    const [songs, setSongs] = useState<Array<Song>>([]);
    useEffect(() => {
        getSongs()
            .then((r) => setSongs(r.data))
            .catch((error) => console.log(error));
    }, []);
    if (!Array.isArray(songs)) {
        // Si songs no es una matriz, puedes manejarlo de alguna manera, como asignar un valor predeterminado o mostrar un mensaje de error.
        return <div>Error: No se pudo cargar la lista de canciones.</div>;
    }
    return (
        <section className="flex flex-col">
        <h2 className="text-5xl my-16 mx-3 font-bold">Todos los beats</h2>
        <div className="flex gap-15 flex-wrap justify-center w-full">
            {songs.map((s) => {
                return <CardShop song={s} key={s.ID}></CardShop>;
            })}
        </div>
        </section>
    );
}

export default CardContainer;
