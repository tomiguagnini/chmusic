import {
    Dialog,
    DialogContent,
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
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { BoomBox, Layers, Mic, Mic2, RadioTower, Video } from "lucide-react";
import { Song } from "@/types";
import { MouseEventHandler, ReactNode } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

type props = {
    song: Song;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
export default function License({ song, children, onClick }: props) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>

            <DialogContent className="min-w-[300px]">
                <ScrollArea>
                    <DialogHeader>
                        <DialogTitle className="text-2xl pb-5 pt-2">
                            Licencias
                        </DialogTitle>
                        <div className="flex items-center pb-3">
                            <img 
                            src={song.Image} 
                            height={90} 
                            width={90}
                            className="mx-3"
                            ></img>
                            <div className="w-full m-auto">
                                <p className="text-xl text-center">{song.Title}</p>
                                <p className="text-lg  text-slate-500 text-center">
                                    {song.Artist}
                                </p>
                            </div>
                        </div>
                    </DialogHeader>
                    <Card className="p-0">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="px-3 text-2xl">
                                Licencia Estandar
                            </CardTitle>
                            <Button
                                variant={"outline"}
                                className="bg-primary-600"
                                onClick={onClick}
                            >
                                $ {song.Price}
                            </Button>
                        </CardHeader>
                        <CardContent className="flex flex-col overflow-hidden">
                            <div className="flex gap-3 text-xs">
                                <span>
                                    <Mic />
                                </span>
                                Utilizado para grabacion de musica
                            </div>
                            <div className="flex gap-3 text-xs">
                                <span>
                                    <RadioTower />
                                </span>
                                80.000 transmicion de audio en linea
                            </div>
                            <div className="flex gap-3 text-xs">
                                <span>
                                    <Mic2 />
                                </span>
                                Actuaciones en vivo con fines de lucro
                            </div>
                            <div className="flex gap-3 text-xs">
                                <span>
                                    <BoomBox />
                                </span>
                                Derechos de radiodifucion 5 (cinco)
                            </div>
                            <div className="flex gap-3 text-xs">
                                <span>
                                    <Layers />
                                </span>
                                Distribucion de 2000 copias
                            </div>
                            <div className="flex gap-3 text-xs">
                                <span>
                                    <Video />
                                </span>
                                2 videos musicales
                            </div>
                        </CardContent>
                        <CardFooter></CardFooter>
                    </Card>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
