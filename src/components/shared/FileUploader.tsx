import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button } from '../ui/button'

const FileUploader = () => {

    const [file, setFile] = useState([])
    const [fileUrl, setFileUrl] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setFile(acceptedFiles)
      }, [])
      const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': [ '.png', '.jpeg', '.svg' ]
        }
    })

      
  return (
    <div {...getRootProps()}
        className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'
    >
      <input {...getInputProps()} 
        className='cursor-pointer'
      />
      {
        fileUrl ? (
            <div>
                test 1
            </div>
        ) : (
            <div className='file_uploader-box'>
               <img
                src='/assets/icons/file-upload.svg'
                width={96}
                height={77}
                alt='file-upload'
               />
               <h3 className='base-medium text-light-2 mb-2 mt-6'>Drag Photos</h3>
               <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>
               <Button className='shad-button_dark_4'>
                    Select Photos
               </Button>
            </div>
        )
        //   <p>Drop the files here ...</p> :
        //   <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default FileUploader