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
  background-color: whitesmoke;
  width: 100%;
  padding: 0;
  color: grey;

  input {
    border: none;
    font-size: 16px;
    background-color: whitesmoke;
    padding: 5px;
    width: 90%;
    outline: 0 none;
    caret-color: transparent;
    ::placeholder {
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
    }
  }
  hr {
    width: 90%;
    margin-top: 0;
    color: grey;
  }
`
