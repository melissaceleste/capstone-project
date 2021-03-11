import styled from 'styled-components/macro'
import Upload from '../Upload/Upload'
// import React, { component } from 'react'

export default function AddNew({ onAddNewCard }) {
  return (
    <AddNewContainer onSubmit={handleSubmit}>
      <Upload />
      <p>
        Umso mehr Infos du speicherst, umso einfacher kannst du deine
        Lieblingsteile später wieder finden:)
      </p>
      <label>
        <h2>Name:</h2>
        <input
          placeholder="z.B. Minikleid oder Lieblingskleid"
          name="nameOfClothing"
        />
      </label>
      <label>
        <h2>Kaufdatum:</h2>
        <input type="date" placeholder="30.01.2018" name="date" />
      </label>
      <label>
        <h2>Geschäft:</h2>
        <input placeholder="Monki" name="store" />
      </label>
      <label>
        <h2>Preis:</h2>
        <input
          placeholder="45"
          name="price"
          type="number"
          step="0.01"
          min="0"
        />
      </label>
      <h2>Kleidungsart:</h2>
      <ContainerKleidungsart>
        <label>
          <h3> Oberteil </h3>
          <input type="radio" name="Oberteil" />
        </label>
        <label>
          <h3> Kleid </h3>
          <input type="radio" name="Kleid" />
        </label>

        <label>
          <h3> Rock </h3>
          <input type="radio" name="Rock" />
        </label>

        <label>
          <h3> Hose </h3>
          <input type="radio" name="Oberteil" />
        </label>

        <label>
          <h3> Jacke </h3>
          <input type="radio" name="Jacke" />
        </label>

        <label>
          <h3> Schuhe </h3>
          <input type="radio" name="Schuhe" />
        </label>

        <label>
          <h3> Accessoire </h3>
          <input type="radio" name="Accessoire" />
        </label>

        <label>
          <h3> special stuff💫 </h3>
          <input type="radio" name="special stuff" />
        </label>
      </ContainerKleidungsart>
      <br />
      <SubmitButton> hinzufügen </SubmitButton>
    </AddNewContainer>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfClothing, store, price, date } = form.elements
    onAddNewCard({
      name: nameOfClothing.value,
      store: store.value,
      price: price.value,
      date: date.value,
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
  }
`
const ContainerKleidungsart = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

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
