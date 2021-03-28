import styled from 'styled-components/macro'

export default function FilterByStore({ userInputStore, setUserInputStore }) {
  return (
    <FilterLabel>
      <input
        placeholder="   Geschäft"
        value={userInputStore}
        onChange={event => setUserInputStore(event.target.value)}
      />
      <hr />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  padding: 0;
  input {
    border: none;
    font-size: 12px;
    background-color: transparent;
    padding: 5px;
    width: 90%;
    outline: 0 none;
    caret-color: transparent;
    ::placeholder {
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
      color: black;
      opacity: 1;
    }
  }
  hr {
    width: 90%;
    margin-top: 0;
    color: grey;
  }
`
