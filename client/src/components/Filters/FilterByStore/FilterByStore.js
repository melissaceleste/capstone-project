import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterByStore.propTypes = {
  userInputStore: PropTypes.string.isRequired,
  setUserInputStore: PropTypes.func.isRequired,
}

export default function FilterByStore({ userInputStore, setUserInputStore }) {
  return (
    <FilterLabel>
      <input
        placeholder="   Geschäft"
        value={userInputStore}
        onChange={event => setUserInputStore(event.target.value)}
        aria-label="store"
      />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: var(--color-transparent);
  width: 100%;
  input {
    background-color: var(--color-transparent);
    width: 90%;
    border-bottom: 1px solid var(--color-black);
    ::placeholder {
      color: var(--color-black);
    }
  }
`
