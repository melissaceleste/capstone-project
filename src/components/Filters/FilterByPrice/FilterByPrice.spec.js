import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterByPrice from './FilterByPrice'

describe('FilterByPrice', () => {
  it('renders two input fields', () => {
    render(<FilterByPrice />)
    expect(screen.getByTestId('minPrice')).toBeInTheDocument()
    expect(screen.getByTestId('maxPrice')).toBeInTheDocument()
  })
})

/*   it('renders two inputs with the callback onChange', () => {
    const callback = jest.fn()
    render(
      <FilterByPrice
        onChange={callback}
        setUserInputMaxPrice={callback}
        setUserInputMinPrice={callback}
      />
    )
    userEvent.type(screen.getByTestId('minPrice'), 0)
    userEvent.type(screen.getByTestId('maxPrice'), 200)
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenCalledWith(0, 200)
  })  */
