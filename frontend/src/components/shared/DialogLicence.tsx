import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import pdfUrl from "@/assets/licencia estandar.pdf";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import licenciaTXT from "@/assets/licencia estandar.txt"
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function DialogLicence() {
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchTextFile = async () => {
            try {
              const response = await fetch(licenciaTXT); // Ajusta la ruta según la estructura de tu proyecto
              const fileContent = await response.text();
              setText(fileContent);
            } catch (error) {
              console.error('Error al cargar el archivo:', error);
            }
          };
      
          fetchTextFile();
      }, []);

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={"outline"}>Ver Contrato de licencia</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">Contrato de licencia</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <ScrollArea className="h-[450px]  rounded-md border p-4">
                {text}
                </ScrollArea>

            </DialogContent>
        </Dialog>
    );
}
