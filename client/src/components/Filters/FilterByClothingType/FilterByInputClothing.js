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
          Wähle ein Kleidungstyp
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
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  width: 100%;
  padding: 0;
  margin-left: 15px;
  color: grey;

  select {
    border-radius: 10px;
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    width: 100%;
    border: none;
    appearance: none;
    color: grey;
    text-align: center;
    letter-spacing: 0.2em;
    font-size: 15px;
    font-weight: 300;
    width: 90%;
  }
`
