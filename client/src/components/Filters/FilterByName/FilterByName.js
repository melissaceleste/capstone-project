import styled from 'styled-components/macro'

export default function FilterByName({ userInputName, setUserInputName }) {
  return (
    <FilterLabel>
      <input
        placeholder="  Name "
        value={userInputName}
        onChange={event => setUserInputName(event.target.value)}
      />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  padding: 0;
  input {
    background-color: transparent;
    width: 90%;
    border-bottom: 1px solid black;
    ::placeholder {
      color: black;
    }
  }
`
