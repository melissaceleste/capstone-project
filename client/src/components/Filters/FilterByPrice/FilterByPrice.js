import styled from 'styled-components/macro'

export default function Filter({
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
}) {
  return (
    <FilterLabel>
      <div>Kaufpreis:</div>
      <FlexContainer>
        <InputIconWrapper>
          <input
            data-testid="minPrice"
            name="minPrice"
            type="number"
            min="0"
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
  color: grey;
  div {
    font-size: 16px;
    margin: 0;
    text-align: center;
    color: grey;
    opacity: 1;
    letter-spacing: 0.2em;
    font-weight: 300;
  }
  input {
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    width: 99%;
    margin: 0;
    color: grey;
    text-align: center;
    letter-spacing: 0.2em;
    font-size: 12px;
    font-weight: 300;
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
  top: 0px;
`
const InputIconWrapper = styled.section`
  position: relative;
`
const FlexContainer = styled.section`
  display: flex;
  justify-content: space-around;
`
