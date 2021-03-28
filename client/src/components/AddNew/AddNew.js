import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function AddNew({ onAddNewCard }) {
  const [imageURLs, setImageURLs] = useState([])
  const [image, setImage] = useState('')
  return (
    <>
      <AddNewContainer
        onSubmit={handleSubmit}
        action="/profile"
        method="post"
        enctype="multipart/form-data"
      >
        <Comment>
          Umso mehr Infos du speicherst, umso einfacher kannst du deine
          Lieblingsteile später wieder finden:)
        </Comment>
        {image ? (
          <img src={image} alt="" style={{ width: '100%' }} />
        ) : (
          <input type="file" name="file" onChange={upload} />
        )}
        <label>
          <input placeholder="Name" name="nameOfClothing" />
          <hr />
        </label>
        <label>
          <div>Kaufdatum</div>

          <input type="date" name="date" placeholder="Kaufdatum" />
          <hr />
        </label>
        <label>
          <input placeholder="Geschäft" name="store" /> <hr />
        </label>
        <label>
          <InputIconWrapper>
            <input
              placeholder="Preis  "
              name="price"
              type="number"
              step="0.01"
              min="0"
            />
            <hr />
            <InputIcon> €</InputIcon>
          </InputIconWrapper>
        </label>

        <div>Kleidungsart</div>
        <ContainerClothingType>
          <label>
            Oberteil
            <ClothingTypeInput
              type="radio"
              name="clothingType"
              value="Oberteil"
            />
          </label>
          <label>
            Kleid
            <ClothingTypeInput type="radio" name="clothingType" value="Kleid" />
          </label>

          <label>
            Rock
            <ClothingTypeInput type="radio" name="clothingType" value="Rock" />
          </label>

          <label>
            Hose
            <ClothingTypeInput type="radio" name="clothingType" value="Hose" />
          </label>

          <label>
            Jacke
            <ClothingTypeInput type="radio" name="clothingType" value="Jacke" />
          </label>

          <label>
            Schuhe
            <ClothingTypeInput
              type="radio"
              name="clothingType"
              value="Schuhe"
            />
          </label>

          <label>
            Accessoire
            <ClothingTypeInput
              type="radio"
              name="clothingType"
              value="Accessoire"
            />
          </label>

          <label>
            special stuff💫
            <ClothingTypeInput
              type="radio"
              name="clothingType"
              value="special"
            />
          </label>
        </ContainerClothingType>
        <br />
        <SubmitButton text="add"> hinzufügen </SubmitButton>
      </AddNewContainer>
    </>
  )

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
    const url = { url: response.data.url }
    setImageURLs([...imageURLs, url])
    setImage(response.data.url)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfClothing, store, price, date, clothingType } = form.elements
    onAddNewCard({
      id: uuidv4(),
      name: nameOfClothing.value,
      urls: imageURLs,
      file: imageURLs,
      store: store.value,
      price: price.value,
      date: date.value,
      clothingType: clothingType.value,
    })
    form.reset()
  }
}

const AddNewContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 90%;
  margin: 10px auto;
  display: grid;
  gap: 15px;
  div {
    font-size: 16px;
    margin-left: 6px;
    text-align: center;
    color: black;
    opacity: 1;
    letter-spacing: 0.2em;
    font-weight: 300;
    text-transform: uppercase;
  }
  h3 {
    font-size: 14px;
    margin: 0;
  }
  input {
    border: none;
    font-size: 16px;
    background-color: whitesmoke;
    padding: 5px;
    width: 90%;
    outline: 0 none;
    caret-color: transparent;
    appearance: none;
    text-align: center;
    color: black;
    margin-left: 18px;
    ::placeholder {
      letter-spacing: 0.2em;
      text-align: center;
      color: black;
      opacity: 1;
      text-transform: uppercase;
    }
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
  hr {
    width: 90%;
    margin-top: 0;
    color: black;
  }
  label {
    text-transform: uppercase;
  }
`
const ContainerClothingType = styled.section`
  text-align: center;
  h3 {
    font-size: 14px;
    color: darkgrey;
  }
  label {
    margin: 10px;
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
  padding: 5px;
`
const InputIcon = styled.div`
  position: absolute;
  left: 90%;
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
const ClothingTypeInput = styled.input`
  :checked {
    background-color: black;
    width: 40%;
    margin: 0 50px;
    margin-left: 100px;
    display: block;
  }
`
