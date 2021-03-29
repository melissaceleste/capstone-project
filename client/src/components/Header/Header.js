import styled from 'styled-components/macro'
import SideBar from '../SideBar/SideBar'

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <SideBar />
        <h1>coucou!</h1>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
`
