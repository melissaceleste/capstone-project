import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterByName.propTypes = {
  userInputName: PropTypes.string,
  setUserInputName: PropTypes.func,
}

export default function FilterByName({ userInputName, setUserInputName }) {
  return (
    <FilterLabel>
      <input
        placeholder="  Name "
        value={userInputName}
        onChange={event => setUserInputName(event.target.value)}
        aria-label="name"
      />
    </FilterLabel>
  )
}

const FilterLabel = styled.label`
  background-color: var(--color-transparent);
  width: 100%;
  padding: 0;
  input {
    background-color: var(--color-transparent);
    width: 90%;
    border-bottom: 1px solid var(--color-black);
    ::placeholder {
      color: var(--color-black);
    }
  }
`
