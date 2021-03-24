import styled from 'styled-components/macro'

export default function ResetButton({ handleResetFilter }) {
  return <Button onclick={handleResetFilter}> reset </Button>
}

const Button = styled.button`
  background-color: transparent;
  color: black;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 1px 1px 1px darkgrey;
  font-size: 16px;
  width: 100%;
  margin: 20px auto auto;
  padding: 5px;
`
