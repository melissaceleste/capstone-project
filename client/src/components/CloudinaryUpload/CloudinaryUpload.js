import { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'

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
      {image ? (
        <img src={image} alt="" style={{ width: '100%' }} />
      ) : (
        <input
          type="file"
          name="file"
          onChange={handleFileInputChange}
          //       value={fileInputState}
        />
      )}
      <button onClick={upload}> upload </button>
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

const AddNewContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 90%;
  margin: 10px auto;
  h2 {
    font-size: 16px;
    margin: 25px 0 0 0;
    color: grey;
  }
  h3 {
    font-size: 14px;
    margin: 0;
  }
  input {
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    width: 100%;
    margin: 0;
    font-family: inherit;
    color: grey;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

const SubmitButton = styled.button`
  background-color: transparent;
  color: black;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 1px 1px 1px darkgrey;
  font-size: 16px;
  width: 100%;
  margin: 20px auto auto;
  padding: 5px;
`
/* 
const InputIcon = styled.div`
  position: absolute;
  left: 96%;
  top: 3px;
  color: grey;
`
const InputIconWrapper = styled.div`
  position: relative;
`
const Comment = styled.p`
  color: grey;
  text-align: center;
`
 */
