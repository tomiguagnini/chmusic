import CreateSong from '@/components/forms/CreateSong'

function UploadSongs() {
  return (
    <>
        <div className='common-container'>
          <h1 className='text-4xl my-5 font-bold'>Cargar beat</h1>
            <CreateSong/>
        </div> 
    </>
  )
}

export default UploadSongs