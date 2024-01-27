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
                        <DialogTitle className="text-2xl py-7">
                            Licencias
                        </DialogTitle>
                        <img
                            src={song.Image}
                            height={90}
                            width={90}
                            className="m-auto"
                        ></img>
                        <p className="text-xl">{song.Title}</p>
                        <DialogDescription className="pb-3">
                            <p className="text-lg">{song.Artist}</p>
                        </DialogDescription>
                    </DialogHeader>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="px-3">
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
                           
                                
                                        <p className="flex gap-3 text-sm">
                                            <span>
                                                <Mic />
                                            </span>
                                            Utilizado para grabacion de musica
                                        </p>
                                        <p className="flex gap-3 text-sm">
                                            <span>
                                                <RadioTower />
                                            </span>
                                            80.000 transmicion de audio en linea
                                        </p>
                                        <p className="flex gap-3 text-sm">
                                            <span>
                                                <Mic2 />
                                            </span>
                                            Actuaciones en vivo con fines de
                                            lucro
                                        </p>
                                        <p className="flex gap-3 text-sm">
                                            <span>
                                                <BoomBox />
                                            </span>
                                            Derechos de radiodifucion 5 (cinco)
                                        </p>
                                        <p className="flex gap-3 text-sm">
                                            <span>
                                                <Layers />
                                            </span>
                                            Distribucion de 2000 copias
                                        </p>
                                        <p className="flex gap-3 text-sm">
                                            <span>
                                                <Video />
                                            </span>
                                            2 videos musicales
                                        </p>
                                    
                        </CardContent>
                        <CardFooter></CardFooter>
                    </Card>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
