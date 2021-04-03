import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ResetButton.propTypes = {
  handleResetFilter: PropTypes.func.isRequired,
}

export default function ResetButton({ handleResetFilter }) {
  return <Button onclick={handleResetFilter}> Filter zurücksetzen </Button>
}

const Button = styled.button`
  background-color: var(--color-transparent);
  color: var(--color-black);
  border-radius: 5px;
  border: 2px solid var(--color-black);
  box-shadow: 1px 1px 1px var(--color-boxshadow);
  font-size: 16px;
  width: 100%;
  margin: 20px auto auto;
  padding: 5px;
  letter-spacing: 0.2em;
  text-align: center;
  opacity: 1;
  text-transform: uppercase;
`
