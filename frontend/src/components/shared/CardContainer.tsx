import CardShop from "@/components/shared/CardShop"
import { getSongs } from "@/services";
import { Song } from "@/types";
import { useState, useEffect } from 'react'



function CardContainer() {
    const [songs, setSongs] = useState<Array<Song>>([]);
    useEffect(() => {
        getSongs().then((r) => setSongs(r.data));
    }, []);
  return (
    <div className="flex gap-15 flex-wrap justify-center w-full">
        {songs.map((s)=>{
          return (<CardShop song={s} key={s.ID}></CardShop>)
          
        })}
    </div>
  )
}

export default CardContainer