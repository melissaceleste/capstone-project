import styled from 'styled-components/macro'

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
      <hr />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  padding: 0;
  select {
    border: none;
    font-size: 12px;
    background-color: transparent;
    appearance: none;
    opacity: 1;
    padding: 5px;
    width: 90%;
    outline: 0 none;
    caret-color: transparent;
    text-align: center;
    letter-spacing: 0.2em;
    font-weight: 300;
    margin-left: 10px;
    text-transform: uppercase;
  }
  hr {
    width: 90%;
    margin-top: 0;
    color: grey;
  }
`
