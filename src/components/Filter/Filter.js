import styled from 'styled-components/macro'

export default function Filter({
  showAllClothingTypes,
  userInputName,
  setUserInputName,
  userInputStore,
  setUserInputStore,
  userInputClothingType,
  setUserInputClothingType,
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
  userInputFromDate,
  setUserInputFromDate,
  userInputToDate,
  setUserInputToDate,
  handleOnResetFilter,
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
    <FilterContainer>
      <h1>Such nach deinem Kleidungsstück...</h1>
      <FilterWrapper>
        <h2>Name:</h2>
        <Input
          placeholder="z.B. Minikleid"
          value={userInputName}
          onChange={event => setUserInputName(event.target.value)}
        />
      </FilterWrapper>
      <br />
      <FilterWrapper>
        <h2>Geschäft:</h2>
        <Input
          placeholder="z.B. Monki"
          value={userInputStore}
          onChange={event => setUserInputStore(event.target.value)}
        />
      </FilterWrapper>
      <FilterWrapper>
        <h2>Preis:</h2>
        <input
          name="minPrice"
          type="number"
          min="0"
          max="100"
          step="10"
          value={userInputMinPrice}
          onChange={event => setUserInputMinPrice(event.target.value)}
        ></input>
        <input
          name="maxPrice"
          type="number"
          step="10"
          value={userInputMaxPrice}
          onChange={event => setUserInputMaxPrice(event.target.value)}
        ></input>
      </FilterWrapper>
      <FilterWrapper>
        <h2>Datum:</h2>
        from
        <input
          type="date"
          max={userInputToDate}
          defaultValue={userInputFromDate}
          onChange={event => setUserInputFromDate(event.target.value)}
        />
        to
        <input
          type="date"
          min={userInputFromDate}
          defaultValue={userInputToDate}
          onChange={event => setUserInputToDate(event.target.value)}
        />
      </FilterWrapper>
      <FilterWrapper>
        <h2>Kleidungstyp</h2>
        <select
          value={userInputClothingType}
          onChange={event => setUserInputClothingType(event.target.value)}
        >
          <option value="" disabled hidden>
            Wähle ein Kleidungstyp
          </option>
          {showAllClothingTypes && (
            <option key="allClothingTypes" value="all">
              {' '}
              alle{' '}
            </option>
          )}
          {selectOptions.map(option => (
            <option key={option.label} value={option.value}>
              {' '}
              {option.label}{' '}
            </option>
          ))}
        </select>
      </FilterWrapper>
      <button onclick={handleOnResetFilter}> reset </button>
    </FilterContainer>
  )
}

const FilterContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
  h1 {
    font-size: 18px;
    margin: 2px;
  }
  h2 {
    font-size: 16px;
    margin: 0;
  }
  button {
    background-color: #acb49b;
    color: white;
    border-radius: 20px;
    border: none;
    box-shadow: 3px 3px 3px darkgrey;
    font-size: 16px;
    width: 100%;
    margin: 20px auto auto;
    padding: 5px;
  }
`
const FilterWrapper = styled.label`
  padding: 0;
  margin: 10px;
  color: grey;
`
const Input = styled.input`
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 1px grey;
  padding: 5px;
  width: 100%;
`
