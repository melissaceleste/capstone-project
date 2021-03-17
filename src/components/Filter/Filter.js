import styled from 'styled-components/macro'
import { useState } from 'react'

export default function Filter({
  showAllClothingTypes,
  userInputName,
  setUserInputName,
  userInputStore,
  setUserInputStore,
  userInputClothingType,
  setUserInputClothingType,
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
}) {
  const selectOptions = [
    { label: 'Oberteile', value: 'Oberteil' },
    { label: 'Kleider', value: 'Kleid' },
    { label: 'Hosen', value: 'Hose' },
    { label: 'Jacken', value: 'Jacke' },
    { label: 'Schuhe', value: 'Schuhe' },
    { label: 'Accessoires', value: 'Accessoire' },
    { label: 'special stuff', value: 'special' },
  ]

  return (
    <FilterContainer>
      <h1>Such nach deinem Kleidungsstück...</h1>
      <FilterWrapper>
        <h2>Name:</h2>
        <Input
          placeholder="z.B. Minikleid"
          value={userInputName}
          onChange={event => setUserInputName(event.target.value)}
        />
      </FilterWrapper>
      <br />
      <FilterWrapper>
        <h2>Geschäft:</h2>
        <Input
          placeholder="z.B. Monki"
          value={userInputStore}
          onChange={event => setUserInputStore(event.target.value)}
        />
      </FilterWrapper>
      <FilterWrapper>
        <h2>Preis:</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={userInputMinPrice}
          onChange={event => setUserInputMinPrice(event.target.value)}
        ></input>
        <input
          type="range"
          min="101"
          max="200"
          step="10"
          value={userInputMaxPrice}
          onChange={event => setUserInputMaxPrice(event.target.value)}
        ></input>
        {/* 
        <input
          minValue={minPrice}
          maxValue={maxPrice}
          step="10"
          onChange={onChange}
          value={value}
        /> */}
      </FilterWrapper>
      <FilterWrapper>
        <h2>Datum:</h2>
      </FilterWrapper>
      <FilterWrapper>
        <h2>Kleidungstyp</h2>
        <select
          value={userInputClothingType}
          onChange={event => setUserInputClothingType(event.target.value)}
        >
          <option value="" disabled hidden>
            Wähle ein Kleidungstyp
          </option>
          {showAllClothingTypes && (
            <option key="allClothingTypes" value="all">
              {' '}
              alle{' '}
            </option>
          )}
          {selectOptions.map(option => (
            <option key={option.label} value={option.value}>
              {' '}
              {option.label}{' '}
            </option>
          ))}
        </select>
      </FilterWrapper>
      <button> reset </button>
    </FilterContainer>
  )
}

const FilterContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
  h1 {
    font-size: 18px;
    margin: 2px;
  }
  h2 {
    font-size: 16px;
    margin: 0;
  }
  button {
    background-color: #acb49b;
    color: white;
    border-radius: 20px;
    border: none;
    box-shadow: 3px 3px 3px darkgrey;
    font-size: 16px;
    width: 100%;
    margin: 20px auto auto;
    padding: 5px;
  }
`
const FilterWrapper = styled.label`
  padding: 0;
  margin: 10px;
  color: grey;
`
const Input = styled.input`
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 1px grey;
  padding: 5px;
  width: 100%;
`
