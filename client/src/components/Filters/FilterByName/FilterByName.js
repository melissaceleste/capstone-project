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
    text-align: center;
    border: none;
    font-size: 12px;
    background-color: transparent;
    padding: 5px;
    width: 90%;
    outline: none;
    caret-color: transparent;
    border-bottom: 1px solid black;
    &:focus {
      box-shadow: 2px 3px #cc99ff;
    }
    ::placeholder {
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: black;
      opacity: 1;
    }
  }
`
