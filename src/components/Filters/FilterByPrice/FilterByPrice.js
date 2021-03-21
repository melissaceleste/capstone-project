import styled from 'styled-components/macro'

export default function Filter({
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
}) {
  return (
    <FilterLabel>
      <h2>Kaufpreis:</h2>
      <FlexContainer>
        <InputIconWrapper>
          <input
            data-testid="minPrice"
            name="minPrice"
            type="number"
            min="0"
            max=""
            step="10"
            value={userInputMinPrice}
            onChange={event => setUserInputMinPrice(event.target.value)}
          ></input>
          <InputIcon> €</InputIcon>
        </InputIconWrapper>

        <strong> - </strong>
        <InputIconWrapper>
          <input
            data-testid="maxPrice"
            name="maxPrice"
            type="number"
            step="10"
            value={userInputMaxPrice}
            onChange={event => setUserInputMaxPrice(event.target.value)}
          ></input>
          <InputIcon> €</InputIcon>
        </InputIconWrapper>
      </FlexContainer>
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
    width: 99%;
    margin: 0;
    color: grey;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
const InputIcon = styled.div`
  position: absolute;
  left: 138px;
  top: 3px;
`
const InputIconWrapper = styled.div`
  position: relative;
`
const FlexContainer = styled.section`
  display: flex;
  justify-content: space-around;
`
