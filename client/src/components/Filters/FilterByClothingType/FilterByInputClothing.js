import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterByClothingType.propTypes = {
  showAllClothingTypes: PropTypes.func,
  userInputClothingType: PropTypes.string,
  setUserInputClothingType: PropTypes.func,
}

export default function FilterByClothingType({
  showAllClothingTypes,
  userInputClothingType,
  setUserInputClothingType,
}) {
  const selectOptions = [
    { label: 'Oberteile', value: 'Oberteil' },
    { label: 'Kleider', value: 'Kleid' },
    { label: 'Hosen', value: 'Hose' },
    { label: 'Jacken', value: 'Jacke' },
    { label: 'Schuhe', value: 'Schuhe' },
    { label: 'Accessoires', value: 'Accessoire' },
    { label: 'special stuff', value: 'special' },
  ]

  return (
    <FilterLabel>
      <select
        data-testid="select"
        value={userInputClothingType}
        onChange={event => setUserInputClothingType(event.target.value)}
      >
        <option value="" disabled hidden>
          Kleidungstyp
        </option>
        {showAllClothingTypes && (
          <option key="allClothingTypes" value="all">
            alle
          </option>
        )}
        {selectOptions.map(option => (
          <option
            key={option.label}
            value={option.value}
            data-testid={option.label}
          >
            {option.label}
          </option>
        ))}
      </select>
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: var(--color-transparent);
  width: 100%;
  padding: 0;
  select {
    padding: 5px;
    text-transform: uppercase;
    border: none;
    font-size: 12px;
    background-color: var(--color-transparent);
    appearance: none;
    opacity: 1;
    width: 90%;
    text-align: center;
    letter-spacing: 0.2em;
    font-weight: 300;
    border-bottom: 1px solid var(--color-black);
  }
`
