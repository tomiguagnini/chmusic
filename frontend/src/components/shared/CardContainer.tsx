import CardShop from "@/components/shared/CardShop"
import { getSongs } from "@/services";
import { Song } from "@/types";
import { useState, useEffect } from 'react'



function CardContainer() {
    const [songs, setSongs] = useState<Array<Song>>([
      {
        ID:0,
        Title:'secuen',
        Artist:'ch',
        Price:'100',
        Image:'/assets/imagen0.jpeg',
        Listening:'/assets/algo.mp3',
        createdAt:'asd',
        updatedAt:'asd'
      }
    ]);
    useEffect(() => {
        getSongs()
        .then((r) => setSongs(r.data))
        .catch((error)=> console.log(error))
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