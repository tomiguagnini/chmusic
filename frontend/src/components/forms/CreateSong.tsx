import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SongValidation } from "@/lib/validation";
import FileUploader from "@/components/shared/FileUploader";
import { createSongPost } from "@/services";
import { convertFilesToUrl } from "@/lib/utils";
import { useState } from "react";
import Spinner from "../shared/Spinner";


const CreateSong = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof SongValidation>>({
        resolver: zodResolver(SongValidation),
        defaultValues: {
            Title: "",
            Artist: "",
            Price: "",
            Genre: "",
            File: [],
            Image: [],
            Listening: [],
        },
    });

    async function onSubmit(values: z.infer<typeof SongValidation>) {
        try {
            setLoading(true);
            const convertedData = await convertFilesToUrl(values);
            const response = await createSongPost(convertedData);
            setLoading(false);
            console.log(response);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <>  
            {loading ? <Spinner/> : ""}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex-col gap 9 w-full max-w-xl space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="Title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Titulo</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Titulo de la cancion.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Artist"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Artista</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Artista de la cancion.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Precio</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>Precio.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genero</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>Genero</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="File"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Beat</FormLabel>
                                <FormControl>
                                    <FileUploader
                                        fieldChange={field.onChange}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Cancion entera.
                                </FormDescription>
                                <FormMessage className="" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Listening"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pre escucha</FormLabel>
                                <FormControl>
                                    <FileUploader
                                        fieldChange={field.onChange}
                                    />
                                </FormControl>
                                <FormDescription>Pre escucha.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Imagen</FormLabel>
                                <FormControl>
                                    <FileUploader
                                        fieldChange={field.onChange}
                                    />
                                </FormControl>
                                <FormDescription>Imagen.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className=" bg-primary-500">
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default CreateSong;
