import styled from 'styled-components/macro'

export default function Filter({
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
}) {
  return (
    <FilterLabel>
      <div>Kaufpreis</div>
      <FlexContainer>
        <InputIconWrapper>
          <input
            data-testid="minPrice"
            name="minPrice"
            type="number"
            min="0"
            value={userInputMinPrice}
            onChange={event => setUserInputMinPrice(event.target.value)}
          />
          <InputIcon> €</InputIcon>
        </InputIconWrapper>
        -
        <InputIconWrapper>
          <input
            data-testid="maxPrice"
            name="maxPrice"
            type="number"
            value={userInputMaxPrice}
            onChange={event => setUserInputMaxPrice(event.target.value)}
          />
          <InputIcon> €</InputIcon>
        </InputIconWrapper>
      </FlexContainer>
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  padding: 0;
  color: black;
  div {
    font-size: 12px;
    margin: 0;
    text-align: center;
    letter-spacing: 0.2em;
    font-weight: 300;
    opacity: 1;
  }
  input {
    background-color: transparent;
    appearance: none;
    padding: 5px;
    border: none;
    width: 99%;
    margin: 0;
    text-align: center;
    letter-spacing: 0.2em;
    font-size: 10px;
    outline: 0 none;
    border-bottom: 1px solid black;
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
const FlexContainer = styled.section`
  display: flex;
  justify-content: space-around;
`
const InputIconWrapper = styled.section`
  position: relative;
`
const InputIcon = styled.section`
  position: absolute;
  left: 132px;
  top: 2px;
  font-size: 12px;
  display: none;
`
