import { useEffect, useState } from "react";
import { Song, columnsS } from "../../types";
import { getSongs } from "../../services";
import { DataTable } from "@/components/shared/DataTable";

function SongsTable() {
    const [songs, setSongs] = useState<Array<Song>>([]);
    useEffect(() => {
        getSongs()
        .then((r) => setSongs(r.data))
        .catch((error)=> console.log(error))
    }, []);

  return (
    <DataTable columns={columnsS} data={songs}/>
  )
}

export default SongsTable