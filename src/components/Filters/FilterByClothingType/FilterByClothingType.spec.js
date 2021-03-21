import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FilterByInputClothing from './FilterByInputClothing'

describe('FilterByInputClothing', () => {
  it('renders an select with the options e.g. "Kleider" and the Callback onChange', () => {
    const callback = jest.fn()
    render(
      <FilterByInputClothing
        onChange={callback}
        setUserInputClothingType={callback}
      />
    )
    userEvent.selectOptions(screen.getByTestId('select'), ['Schuhe'])
    expect(screen.getByTestId('Schuhe').selected).toBe(true)
  })
})
