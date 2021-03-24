import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation({ toggleNav, setToggleNav }) {
  return (
    <Nav position={setToggleNav}>
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
  top: 0;
  left: ${props => (props.position ? '-300px' : '0px')};
  width: 300px;
  height: 100%;
  background-color: peru;
  transition: left 300ms ease-out;
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
