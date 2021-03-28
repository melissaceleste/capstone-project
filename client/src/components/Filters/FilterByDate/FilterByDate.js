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
      <ContainerHR>
        <hr /> <hr />
      </ContainerHR>
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
    background-color: whitesmoke;
    appearance: none;
    color: grey;
    padding: 5px;
    border: none;
    padding: 5px;
    width: 99%;
    margin: 0;
    color: grey;
    text-align: center;
    letter-spacing: 0.2em;
    font-size: 10px;
    font-weight: 300;
    font-family: inherit;
    outline: 0 none;
  }
`
const FlexContainer = styled.section`
  display: flex;
`
const ContainerHR = styled.section`
  display: flex;
  justify-content: space-between;
  hr {
    width: 80%;
    margin: 0 15px;
    color: grey;
  }
`
