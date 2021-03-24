import styled from 'styled-components/macro'

export default function ResetButton({ toggleNav, setToggleNav }) {
  return <Button onClick={() => setToggleNav(false)}> </Button>
}

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: pink;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`
