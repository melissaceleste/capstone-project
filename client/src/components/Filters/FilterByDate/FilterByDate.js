import styled from 'styled-components/macro'

export default function FilterByDate({
  userInputFromDate,
  setUserInputFromDate,
  userInputToDate,
  setUserInputToDate,
}) {
  return (
    <FilterLabel>
      <div>Kaufdatum</div>
      <FlexContainer>
        <input
          data-testid="fromDate"
          type="date"
          max={userInputToDate}
          defaultValue={userInputFromDate}
          onChange={event => setUserInputFromDate(event.target.value)}
        />
        -
        <input
          data-testid="toDate"
          type="date"
          min={userInputFromDate}
          defaultValue={userInputToDate}
          onChange={event => setUserInputToDate(event.target.value)}
        />
      </FlexContainer>
      <ContainerHR></ContainerHR>
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: transparent;
  width: 100%;
  padding: 0;
  div {
    font-size: 12px;
    margin: 0;
    text-align: center;
    letter-spacing: 0.2em;
    font-weight: 300;
    color: black;
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
    font-family: inherit;
    outline: 0 none;
    border-bottom: 1px solid black;
    border-bottom-height: 90px;
  }
`
const FlexContainer = styled.section`
  display: flex;
`
const ContainerHR = styled.section`
  display: flex;
  justify-content: space-between;
`
