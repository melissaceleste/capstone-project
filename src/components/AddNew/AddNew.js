import styled from 'styled-components/macro'
import Upload from '../Upload/Upload'
import React, { useState } from 'react'

export default function AddNew({ onAddNewCard }) {
  const [images, setImages] = useState([])

  return (
    <AddNewContainer onSubmit={handleSubmit}>
      <Upload onImage={setImages} required="required" />
      <p>
        Umso mehr Infos du speicherst, umso einfacher kannst du deine
        Lieblingsteile später wieder finden:)
      </p>
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
        <input
          placeholder="35"
          name="price"
          type="number"
          step="0.01"
          min="0"
        />
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
  text-align: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 1px 6px 11px 9px #eee;
  padding: 30px;
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
  background-color: #acb49b;
  color: white;
  border-radius: 20px;
  border: none;
  box-shadow: 3px 3px 3px darkgrey;
  font-size: 16px;
  width: 100%;
  padding: 5px;
`
