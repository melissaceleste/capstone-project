import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Filter.propTypes = {
  userInputMinPrice: PropTypes.number,
  setUserInputMinPrice: PropTypes.func,
  userInputMaxPrice: PropTypes.number,
  setUserInputMaxPrice: PropTypes.func,
}

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
            aria-label="minimum-price"
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
            aria-label="maximum-price"
          />
          <InputIcon> €</InputIcon>
        </InputIconWrapper>
      </FlexContainer>
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: var(--color-transparent);
  width: 100%;
  padding: 0;
  color: var(--color-black);
  div {
    font-size: 12px;
    margin: 0;
    text-align: center;
    letter-spacing: 0.2em;
    font-weight: 300;
    opacity: 1;
    margin-top: 4px;
    margin-bottom: 0;
  }
  input {
    background-color: var(--color-transparent);
    appearance: none;
    width: 130px;
    margin: 0;
    letter-spacing: 0.2em;
    font-size: 10px;
    border-bottom: 1px solid var(--color-black);
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
  margin: 0;
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
