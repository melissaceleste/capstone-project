import styled from 'styled-components/macro'

export default function FilterByStore({ userInputStore, setUserInputStore }) {
  return (
    <FilterLabel>
      <input
        placeholder="   Geschäft"
        value={userInputStore}
        onChange={event => setUserInputStore(event.target.value)}
      />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  input {
    border: none;
    font-size: 12px;
    background-color: transparent;
    padding: 5px;
    width: 90%;
    outline: 0 none;
    caret-color: transparent;
    border-bottom: 1px solid black;
    text-align: center;
    ::placeholder {
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
      color: black;
      opacity: 1;
    }
  }
`
