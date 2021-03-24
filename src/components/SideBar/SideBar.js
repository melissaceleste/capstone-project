import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
const COLORS = {
  primaryDark: '#115b4c',
  primaryLight: '#B6EDC8',
}
export default function SideBar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <SideBarLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Button clicked={click}>
          <div />
          <div />
          <div />
        </Button>
      </SideBarLabel>

      <Nav clicked={click}>
        <NavButton onClick={handleClick} as={NavLink} exact to="/">
          inspire me
        </NavButton>
        <NavButton onClick={handleClick} as={NavLink} to="/mycloset">
          my closet
        </NavButton>
        <NavButton onClick={handleClick} as={NavLink} to="/addnew">
          new
        </NavButton>
      </Nav>
    </>
  )
}
const SideBarLabel = styled.label``

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #c6ffdd; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  transform: ${({ clicked }) =>
    clicked ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`
/*  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  left: 0;
  width: ${props => (props.clicked ? '100%' : '0')};
  opacity: ${props => (props.clicked ? '1' : '0')};
  transition: width 0.8s, opacity 0.8s;
  background: #fff3; */
const NavButton = styled.button`
  background-color: ${props => props.isActive && 'color: white;'};
  ${props => props.isActive && 'border:3px solid black'}
  padding: 20px;
  margin: 30px;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  &.active {
    color: black;
    border: 3px solid white;
  }
`
const Button = styled.button`
  position: absolute;
  top: 3%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ clicked }) => (clicked ? 'black' : 'black')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ clicked }) => (clicked ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ clicked }) => (clicked ? '0' : '1')};
      transform: ${({ clicked }) =>
        clicked ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ clicked }) => (clicked ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
