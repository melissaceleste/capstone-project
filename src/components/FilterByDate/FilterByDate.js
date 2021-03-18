import styled from 'styled-components/macro'

export default function FilterByDate({
  userInputFromDate,
  setUserInputFromDate,
  userInputToDate,
  setUserInputToDate,
}) {
  return (
    <FilterLabel>
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
