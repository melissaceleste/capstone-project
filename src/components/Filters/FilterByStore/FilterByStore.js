import styled from 'styled-components/macro'

export default function FilterByStore({ userInputStore, setUserInputStore }) {
  return (
    <FilterLabel>
      <h2>Geschäft:</h2>
      Zeig mir alle Kleidungsstücke die ich von
      <input
        placeholder="z.B. Monki"
        value={userInputStore}
        onChange={event => setUserInputStore(event.target.value)}
      />
      habe!
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  width: 100%;
  padding: 0;
  margin: 10px;
  color: grey;
  h2 {
    font-size: 16px;
    margin: 0;
  }
  input {
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    width: 20%;
    margin: auto 2px;
  }
`
