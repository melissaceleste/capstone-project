import styled from 'styled-components/macro'
// import React, { useState } from 'react'

export default function Filter({ userInput, setUserInput }) {
  return (
    <FilterContainer>
      <H1>Wer suchet der findet...</H1>
      <FilterByName>
        <H2>Name:</H2>
        <Input
          placeholder="z.B. Minikleid"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
        />
      </FilterByName>
      <br />
      <Button> zeig her! </Button>
    </FilterContainer>
  )
}

const FilterContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
`
const H1 = styled.h1`
  font-size: 18px;
  margin: 2px;
`
const H2 = styled.h2`
  font-size: 16px;
  margin: 0;
`
const FilterByName = styled.label`
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

const Button = styled.button`
  background-color: grey;
  color: white;
  border-radius: 20px;
  border: none;
  box-shadow: 3px 3px 3px darkgrey;
  font-size: 16px;
  width: 100%;
  margin: 20px auto auto;
  padding: 5px;
`
