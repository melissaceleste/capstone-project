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
    background-color: transparent;
    width: 90%;
    border-bottom: 1px solid black;
    ::placeholder {
      color: black;
    }
  }
`
