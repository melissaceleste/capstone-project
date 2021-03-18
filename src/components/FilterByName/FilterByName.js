import styled from 'styled-components/macro'

export default function Filter({ userInputName, setUserInputName }) {
  return (
    <FilterLabel>
      <h1>Such nach deinem Kleidungsstück...</h1>

      <h2>Name:</h2>
      <input
        placeholder="z.B. Minikleid"
        value={userInputName}
        onChange={event => setUserInputName(event.target.value)}
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
