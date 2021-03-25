import { useState } from 'react'
import styled from 'styled-components/macro'
import Upload from '../Upload/Upload'
import { v4 as uuidv4 } from 'uuid'

export default function AddNew({ onAddNewCard }) {
  const [images, setImages] = useState([])

  return (
    <AddNewContainer onSubmit={handleSubmit}>
      <Upload onImage={setImages} required="required" />
      <Comment>
        Umso mehr Infos du speicherst, umso einfacher kannst du deine
        Lieblingsteile später wieder finden:)
      </Comment>
      <label>
        <h2>Name (optional):</h2>
        <input
          placeholder="z.B. Minikleid oder Lieblingskleid"
          name="nameOfClothing"
        />
      </label>
      <label>
        <h2>Kaufdatum (optional):</h2>

        <input type="date" name="date" />
      </label>
      <label>
        <h2>Geschäft (optional):</h2>
        <input placeholder="Monki" name="store" />
      </label>
      <label>
        <h2>Preis (optional):</h2>
        <InputIconWrapper>
          <input
            placeholder="35"
            name="price"
            type="number"
            step="0.01"
            min="0"
          />
          <InputIcon> €</InputIcon>
        </InputIconWrapper>
      </label>

      <h2>Kleidungsart:</h2>
      <ContainerClothingType>
        <label>
          Oberteil
          <input type="radio" name="clothingType" value="Oberteil" />
        </label>
        <label>
          Kleid
          <input type="radio" name="clothingType" value="Kleid" />
        </label>

        <label>
          Rock
          <input type="radio" name="clothingType" value="Rock" />
        </label>

        <label>
          Hose
          <input type="radio" name="clothingType" value="Hose" />
        </label>

        <label>
          Jacke
          <input type="radio" name="clothingType" value="Jacke" />
        </label>

        <label>
          Schuhe
          <input type="radio" name="clothingType" value="Schuhe" />
        </label>

        <label>
          Accessoire
          <input type="radio" name="clothingType" value="Accessoire" />
        </label>

        <label>
          special stuff💫
          <input type="radio" name="clothingType" value="special" />
        </label>
      </ContainerClothingType>
      <br />
      <SubmitButton text="add"> hinzufügen </SubmitButton>
    </AddNewContainer>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfClothing, store, price, date, clothingType } = form.elements
    onAddNewCard({
      id: uuidv4(),
      name: nameOfClothing.value,
      images: images.map(img => img.data_url),
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
const ContainerClothingType = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  margin: 20px auto auto;
  padding: 5px;
`
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