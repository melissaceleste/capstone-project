import { render, screen } from '@testing-library/react'
import FilterByPrice from './FilterByPrice'

describe('FilterByPrice', () => {
  it('renders two input fields', () => {
    render(<FilterByPrice />)
    expect(screen.getByTestId('minPrice')).toBeInTheDocument()
    expect(screen.getByTestId('maxPrice')).toBeInTheDocument()
  })
})

