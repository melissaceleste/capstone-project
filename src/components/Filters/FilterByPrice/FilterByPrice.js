import styled from 'styled-components/macro'

export default function Filter({
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
}) {
  return (
    <FilterLabel>
      <h2>Preis:</h2>
      <input
        name="minPrice"
        type="range"
        min="0"
        max="100"
        step="10"
        value={userInputMinPrice}
        onChange={event => setUserInputMinPrice(event.target.value)}
      ></input>
      <input
        name="maxPrice"
        type="range"
        step="10"
        value={userInputMaxPrice}
        onChange={event => setUserInputMaxPrice(event.target.value)}
      ></input>
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
    width: 100%;
  }
`
