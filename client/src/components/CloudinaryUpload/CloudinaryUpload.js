import { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import camerasrc from './camera_retro.svg'
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

// import { v4 as uuidv4 } from 'uuid'
//import sendImageData from '../../services/sendImageData'

export default function CloudinaryUpload() {
  //const [fileInputState, setFileInputState] = useState('')
  //const [selectedFile, setSelectedFile] = useState('')
  const [previewSource, setPreviewSource] = useState()
  const [image, setImage] = useState('')
  return (
    <>
      <input
        type="file"
        name="image"
        onChange={handleFileInputChange}
        //       value={fileInputState}
      />
      <button onClick={upload}>
        <img src={camerasrc} alt="Foto aufnehmen" width="150" height="auto" />
      </button>
      {previewSource && (
        <img src={previewSource} alt="" style={{ height: '300px' }} />
      )}{' '}
      {/* if theres a preview source, show it */}
    </>
  )

  function handleFileInputChange(event) {
    const file = event.target.files[0]
    previewFile(file)
  }
  function previewFile(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file) //convert the image to an url (string)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  /* function handleSubmitFile(event) {
    console.log('submitting')
    event.preventDefault()
    if (!previewSource) return
    //const reader = new FileReader()
    //reader.readAsDataURL(selectedFile)
    uploadImage(previewSource)
  }

  // später auslagern in die services sendImageData
  async function uploadImage(base64EncodedImage) {
    console.log(base64EncodedImage)
    try {
      await fetch('/api/upload', {
        // /mit cards?
        method: 'Post',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: {
          'Content-type': 'application/json',
        },
      })
    } catch (error) {
      console.error(error)
    }
  } */
}
