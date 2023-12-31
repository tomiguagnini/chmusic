import { useEffect, useState } from "react";
import { Song } from "../../types";
import { getSongs } from "../../services";
import { DataTable } from "@/components/shared/DataTable";
import { columnsSong } from './ColumnSong'
function SongsTable() {
    const [songs, setSongs] = useState<Array<Song>>([]);
    useEffect(() => {
        getSongs()
        .then((r) => setSongs(r.data))
        .catch((error)=> console.log(error))
    }, []);

  return (
    <DataTable columns={columnsSong} data={songs}/>
  )
}

export default SongsTable