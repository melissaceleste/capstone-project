import styled from 'styled-components/macro'

export default function FilterByDate({
  userInputFromDate,
  setUserInputFromDate,
  userInputToDate,
  setUserInputToDate,
}) {
  return (
    <FilterLabel>
      <div>Kaufdatum:</div>
      <FlexContainer>
        <input
          data-testid="fromDate"
          type="date"
          max={userInputToDate}
          defaultValue={userInputFromDate}
          onChange={event => setUserInputFromDate(event.target.value)}
        />

        <input
          data-testid="toDate"
          type="date"
          min={userInputFromDate}
          defaultValue={userInputToDate}
          onChange={event => setUserInputToDate(event.target.value)}
        />
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
    width: 100%;
    margin: 0 4px;
    font-family: inherit;
    color: grey;
    font-size: 12px;
    margin: 0;
    text-align: center;
    letter-spacing: 0.2em;
    font-weight: 300;
    -webkit-appearance: none;
  }
`
const FlexContainer = styled.section`
  display: flex;
`
