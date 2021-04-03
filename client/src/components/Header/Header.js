import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import SideBar from '../SideBar/SideBar'

Header.propTypes = {
  setHideHeader: PropTypes.func.isRequired,
  hideHeader: PropTypes.string.isRequired,
}

export default function Header({ hideHeader, setHideHeader }) {
  return (
    <>
      <HeaderContainer hideHeader={hideHeader} setHideHeader={setHideHeader}>
        <SideBar />
        <h1>coucou!</h1>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  z-index: 0;
  display: ${props => (props.hideHeader ? '' : 'none')};
  width: 100%;
  background-color: var(--color-white);
  border-radius: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  color: var(--color-black);
`
