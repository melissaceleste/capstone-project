import styled from 'styled-components/macro'
import { useState } from 'react'

export default function FilterByName({ userInputName, setUserInputName }) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <FilterLabel onClick={handleClick}>
      <input
        placeholder="  Name "
        value={userInputName}
        onChange={event => setUserInputName(event.target.value)}
      />
      <hr clicked={click} />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  padding: 0;
  margin: 5px;
  input {
    border: none;
    font-size: 12px;
    background-color: transparent;
    padding: 5px;
    width: 90%;
    outline: 0 none;
    caret-color: transparent;
    ::placeholder {
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: black;
      opacity: 1;
    }
  }
  hr {
    width: 90%;
    margin-top: 0;
    color: ${clicked => (clicked ? 'grey' : 'pink')};
  }
`
