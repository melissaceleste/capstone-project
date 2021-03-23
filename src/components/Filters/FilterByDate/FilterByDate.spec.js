import { render, screen } from '@testing-library/react'
import FilterByDate from './FilterByDate'

describe('FilterByDate', () => {
  it('renders two input fields', () => {
    render(<FilterByDate />)
    expect(screen.getByTestId('fromDate')).toBeInTheDocument()
    expect(screen.getByTestId('toDate')).toBeInTheDocument()
  })
})
