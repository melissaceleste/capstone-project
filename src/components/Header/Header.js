import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderContainer>
      <h1>coucou!</h1>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  // box-shadow: 1px 2px #eee;
  background-color: transparent;
  border-radius: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
`
