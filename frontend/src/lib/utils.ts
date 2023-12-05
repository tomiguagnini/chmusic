import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { uploadFile } from "../../firestore/config"
import { SongValidation } from "./validation";
import * as z from "zod";

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);


export const convertFilesToUrl = async(data: z.infer<typeof SongValidation>)=>{
  const {File , Image, Listening} = data
  // if (!File[0] || !Image[0] || !Listening[0]){
    
  //   return 
  // }

  const fileUrl =await uploadFile(File[0],'audio/'+ File[0].name)
  const imageUrl =await uploadFile(Image[0],'image/'+ Image[0].name)
  const listeningUrl =await uploadFile(Listening[0],'listening/'+ Listening[0].name)
  
  
  
  return {...data, File:fileUrl, Image:imageUrl, Listening:listeningUrl }
}