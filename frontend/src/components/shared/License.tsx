import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { Layers, Mic, Mic2, RadioTower, Video } from "lucide-react";
import { Song } from "@/types";
import {  MouseEventHandler, ReactNode } from "react";

type props = {
    song:Song;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
export default function License({  song, children, onClick }: props) {
    return (
        <Dialog >
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent >
                <DialogHeader >
                    <DialogTitle className="text-2xl py-7">Licencias</DialogTitle>
                    <img src={song.Image} height={200} width={200} className="m-auto"></img>
                        <p className="text-xl">{song.Title}</p>
                    <DialogDescription>
                        <p className="text-lg">{song.Artist}</p>
                    </DialogDescription>
                </DialogHeader>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Licencia Estandar</CardTitle>
                                <Button variant={"outline"} className="bg-primary-600" onClick={onClick}>$ {song.Price}</Button>
                                
                            </CardHeader>
                            <CardContent className="grid-cols-2 ">
                                <p className="flex gap-3 text-sm"><span><Mic/></span>used for Music Recording</p>
                                <p className="flex gap-3 text-sm"><span><RadioTower/></span>80.000 audio streams</p>
                                <p className="flex gap-3 text-sm"><span><Mic2/></span>for profit audio performance</p>
                                <p className="flex gap-3 text-sm"><span><Layers/></span>distribute 50 copies</p>
                                <p className="flex gap-3 text-sm"><span><Video/></span>1 music video</p>
                            </CardContent>
                            <CardFooter>
                                
                            </CardFooter>
                        </Card>
            </DialogContent>
        </Dialog>
    );
}
