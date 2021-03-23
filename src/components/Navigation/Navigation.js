import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav>
      <NavButton as={NavLink} exact to="/">
        home
      </NavButton>
      <NavButton as={NavLink} to="/mycloset">
        my closet
      </NavButton>
      <NavButton as={NavLink} to="/addnew">
        new
      </NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const NavButton = styled.button`
  background-color: ${props => (props.isActive ? 'tomato' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  padding: 20px;
  margin: 0;
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
  box-shadow: 6px 11px 9px #eee;
  color: black;
  font-size: 14px;
  &.active {
    background-color: tomato;
    color: white;
  }
`
