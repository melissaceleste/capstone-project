import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import uploadsrc from './upload.svg'
import postImageData from '../../services/sendImageData'

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
        <UploadLabel>
          {image ? (
            <img src={image} alt="" style={{ width: '100%' }} />
          ) : (
            <Upload
              type="file"
              name="file"
              onChange={upload}
              required="required"
            />
          )}

          {image ? (
            <div>
              <p> Foto ist erfolgreich hochgeladen:) </p>
            </div>
          ) : (
            <div>
              <p> Bitte lade ein Foto hoch</p>
              <img src={uploadsrc} alt="" width="60px" />
            </div>
          )}
        </UploadLabel>

        <label>
          <InputTypeDefault placeholder="Name" name="nameOfClothing" />
        </label>

        <label>
          <InputTypeDefault placeholder="Geschäft" name="store" />
        </label>
        <label>
          <InputIconWrapper>
            <InputTypeDefault
              placeholder="Preis"
              name="price"
              type="number"
              step="0.01"
              min="0"
            />
            <InputIcon> €</InputIcon>
          </InputIconWrapper>
        </label>
        <label>
          <div>Kaufdatum</div>

          <InputTypeDefault type="date" name="date" placeholder="Kaufdatum" />
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
        <SubmitButton text="add"> hinzufügen </SubmitButton>
      </AddNewContainer>
    </>
  )

  function upload(event) {
    postImageData(onImageSave, event)
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
      store: store.value,
      price: price.value,
      date: date.value,
      clothingType: clothingType.value,
    })
    form.reset()
  }
}

const AddNewContainer = styled.form`
  background-color: #111;
  color: white;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 90%;
  margin: 10px auto;
  display: grid;
  gap: 15px;
  text-align: center;
  div {
    font-size: 12px;
    margin-left: 6px;
    text-align: center;
    color: white;
    opacity: 1;
    letter-spacing: 0.2em;
    font-weight: 300;
  }
  input {
    background-color: transparent;
    width: 90%;
    appearance: none;
    color: white;
    ::placeholder {
      color: white;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
const Comment = styled.p`
  color: grey;
  text-align: center;
  color: white;
  letter-spacing: 0.2em;
  text-align: center;
  color: white;
  opacity: 1;
  font-size: 10px;
`
const Upload = styled.input`
  display: none;
`
const UploadLabel = styled.label`
  color: black;
  font-size: 12px;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 15px;
  outline: none;
  letter-spacing: 0.2em;
  background-color: white;
  display: grid;
  gap: 10px;
  p {
    color: black;
  }
`
const InputIconWrapper = styled.div`
  position: relative;
`
const InputIcon = styled.div`
  position: absolute;
  left: 56%;
  top: 3px;
  color: grey;
`
const ContainerClothingType = styled.section`
  text-align: center;
  label {
    font-size: 12px;
    padding: 10px;
  }
`
const ClothingTypeInput = styled.input`
  border-bottom: 1px solid transparent;
`
const InputTypeDefault = styled.input`
  border-bottom: 1px solid white;
`
const SubmitButton = styled.button`
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 2px solid white;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  letter-spacing: 0.2em;
  text-align: center;
  opacity: 1;
  text-transform: uppercase;
`
