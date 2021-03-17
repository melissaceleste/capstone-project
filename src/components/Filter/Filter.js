import styled from 'styled-components/macro'

export default function Filter({ userInput, setUserInput }) {
  return (
    <FilterContainer>
      <h1>Such nach deinem Kleidungsstück...</h1>
      <FilterByName>
        <h2>Name:</h2>
        <Input
          placeholder="z.B. Minikleid"
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
        />
      </FilterByName>
      <br />
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
const FilterByName = styled.label`
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
