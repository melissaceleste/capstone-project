import styled from 'styled-components/macro'

export default function ResetButton({ handleResetFilter }) {
  return <Button onclick={handleResetFilter}> reset </Button>
}

const Button = styled.button`
  background-color: #acb49b;
  color: white;
  border-radius: 20px;
  border: none;
  box-shadow: 3px 3px 3px darkgrey;
  font-size: 16px;
  width: 100%;
  margin: 20px auto auto;
  padding: 5px;
`
