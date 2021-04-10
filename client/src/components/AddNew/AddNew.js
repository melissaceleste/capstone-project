import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import postImageData from '../../services/sendImageData'
import uploadsrc from './upload.svg'

AddNew.propTypes = {
  onAddNewCard: PropTypes.func,
}

export default function AddNew({ onAddNewCard }) {
  const [imageURLs, setImageURLs] = useState([])
  const [image, setImage] = useState('')
  const [popUpWindow, setPopUpWindow] = useState(false)
  const [loadingIcon, setLoadingIcon] = useState(false)

  return (
    <>
      <AddNewContainer
        onSubmit={handleSubmit}
        action="/profile"
        method="post"
        enctype="multipart/form-data"
        autocomplete="off"
      >
        <Comment>
          Umso mehr Infos du speicherst, umso einfacher kannst du deine
          Lieblingsteile später wieder finden:)
        </Comment>

        <ButtonContainer>
          <button onClick={() => setPopUpWindow(!popUpWindow)}>
            Bitte lade ein Foto hoch
          </button>
        </ButtonContainer>

        <PopUpWindow hidden={!popUpWindow}>
          <UploadLabel aria-label="upload image">
            <Upload
              type="file"
              name="file"
              onChange={upload}
              
              onClick={() => setLoadingIcon(!loadingIcon)}
            />

            {image ? (
              <div>
                <p> Foto ist erfolgreich hochgeladen:) </p>
                <DoneButton
                  type="button"
                  onClick={() => setPopUpWindow()}
                  aria-label="uploaded"
                >
                  ✓
                </DoneButton>
                {/* <button type="button" onClick={() => deleteImage()}>
                  löschen
                </button> */}
              </div>
            ) : (
              <div>
                <CloseButton
                  type="button"
                  onClick={() => setPopUpWindow()}
                  aria-label="close"
                >
                  ✕
                </CloseButton>
                <p>hier klicken um Foto hochzuladen</p>
                <img src={uploadsrc} alt="" width="60px" />
              </div>
            )}
          </UploadLabel>
        </PopUpWindow>

        <img src={image} alt="" style={{ width: '100%' }} />
        <label aria-label="type name">
          <InputTypeDefault
            autocomplete="off"
            placeholder="Name"
            name="nameOfClothing"
          />
        </label>
        <label aria-label="type store">
          <InputTypeDefault
            autocomplete="off"
            placeholder="Geschäft"
            name="store"
          />
        </label>
        <label aria-label="type price">
          <InputIconWrapper>
            <InputTypeDefault
              autocomplete="off"
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

          <DateInput
            autocomplete="off"
            type="date"
            name="date"
            placeholder="Kaufdatum"
          />
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
    // setLoadingIcon(!loadingIcon)
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
    window.scrollTo(0, document.body.scrollHeight)
    form.reset()
  }

  /*  function deleteImage(imageURLs, setImageURLs, ) {
    imageURLs.filter(imageUrl => imageUrl.id !== currentId)
    setImageURLs()
  } */

  /*  function deleteImage(imageURLs, setImageURLs, id) {
    setImageURLs([...imageURLs.slice(0, id), ...imageURLs.slice(id + 1)])
  } */
}

const AddNewContainer = styled.form`
  background-color: var(--color-lightblack);
  color: var(--color-white);
  box-shadow: 3px 3px 3px var(--color-boxshadow);
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
    color: var(--color-white);
    opacity: 1;
    letter-spacing: 0.2em;
    font-weight: 300;
  }
  input {
    background-color: var(--color-transparent);
    width: 90%;
    appearance: none;
    color: var(--color-white);
    ::placeholder {
      color: var(--color-white);
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
  color: var(--color-grey);
  text-align: center;
  color: var(--color-white);
  letter-spacing: 0.2em;
  text-align: center;
  color: var(--color-white);
  opacity: 1;
  font-size: 10px;
`
const ButtonContainer = styled.div`
  button {
    background-color: var(--color-transparent);
    color: var(--color-white);
    border-radius: 5px;
    border: 2px solid var(--color-white);
    font-size: 16px;
    width: 100%;
    padding: 5px;
    letter-spacing: 0.2em;
    text-align: center;
    opacity: 1;
    text-transform: uppercase;
    outline: none;
  }
`
const PopUpWindow = styled.div`
  position: fixed;
  z-index: 1;
  width: 311px;
  height: 120px;
  background-color: var(--color-white);
  box-shadow: -1px 1px 41px 500px rgba(255, 254, 245, 0.65);
  i {
    color: var(--color-black);
  }
`
const CloseButton = styled.button`
  border: none;
  background-color: var(--color-white);
  border-radius: 10px;
  font-size: 16px;
  position: absolute;
  right: 0;
  top: 7px;
  outline: none;
`
const DoneButton = styled.button`
  border: none;
  background-color: var(--color-white);
  border-radius: 10px;
  font-size: 16px;
  position: absolute;
  left: 137px;
  top: 87px;
  outline: none;
`

const Upload = styled.input`
  display: none;
`
const UploadLabel = styled.label`
  font-size: 12px;
  padding: 28px;
  outline: none;
  letter-spacing: 0.2em;
  background-color: var(--color-white);
  display: grid;
  gap: 10px;
  p {
    color: var(--color-black);
  }
`
const InputIconWrapper = styled.div`
  position: relative;
`
const InputIcon = styled.div`
  position: absolute;
  left: 56%;
  top: 3px;
  color: var(--color-grey);
`
const DateInput = styled.input`
  border-bottom: 1px solid var(--color-white);
  margin-left: 10px;
  letter-spacing: 0.2em;
  opacity: 1;
  text-transform: uppercase;
  padding-left: 5px;
  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
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
  border-bottom: 1px solid var(--color-white);
`
const SubmitButton = styled.button`
  background-color: transparent;
  color: var(--color-white);
  border-radius: 5px;
  border: 2px solid var(--color-white);
  font-size: 16px;
  width: 100%;
  padding: 5px;
  letter-spacing: 0.2em;
  text-align: center;
  opacity: 1;
  text-transform: uppercase;
  outline: none;
`
