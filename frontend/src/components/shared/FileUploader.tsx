import  {useState, useCallback} from 'react'
import {FileWithPath, useDropzone} from 'react-dropzone'
import { convertFileToUrl } from '@/lib/utils';

type FileUploaderProps = {
  fieldChange: (FILES: File[])=> void;
}

function FileUploader({fieldChange}: FileUploaderProps) {
  const [file, setFile] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState('')
 

  const onDrop = useCallback(async(acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles)
    fieldChange(acceptedFiles)
    setFileUrl(convertFileToUrl(acceptedFiles[0]))
    console.log(acceptedFiles)
  }, [file])

  const {getRootProps, getInputProps,} = useDropzone({
    onDrop,
    
  })



  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer h-40'>
      <input {...getInputProps()} className='cursor-pointer'/>
      {
        fileUrl ? (
          <>
          <div className='flex flex-1 justify-center w-full p-5 lg:p10'>
            {file[0].name}
            </div>
            <p className='file_uploader-label'>Click or drag file to replace</p> 
          </>

        ):(
          <div className='file_uploader-box'>
            <h3>Drag file here</h3>
            <br></br>
            <div className='shad-button_dark_4 rounded items-baseline'>
              Select from your computer
            </div>
          </div>

        )
      }
    </div>
  )
}

export default FileUploader