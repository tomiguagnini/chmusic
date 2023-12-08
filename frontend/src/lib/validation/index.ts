import * as z from "zod";


export const SongValidation = z.object({
    Title: z.string().min(3,{message: 'demasiado corto'}),
    Artist: z.string().min(2,{message: 'demasiado corto'}),
    Genre: z.string().min(1),
    Price: z.string().min(1),
    File: z.custom<File>().array().min(1,{message:'debes cargar un archivo'}),
    Image: z.custom<File>().array().min(1,{message:'debes cargar un archivo'}),
    Listening: z.custom<File>().array().min(1,{message:'debes cargar un archivo'})
});

export const UserValidation = z.object({
    FirstName: z.string().min(3),
    LastName: z.string().min(3),
    Email: z.string().email({message:'email no valido'}),
    Phone: z.string().min(8),
    Dni:z.string().min(7)
})

export const LoginValidation = z.object({
    Email: z.string(),
    Password: z.string()
})