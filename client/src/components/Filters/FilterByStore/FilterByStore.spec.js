import { render, screen } from '@testing-library/react'

import FilterByStore from './FilterByStore'

describe('FilterByStore', () => {
  it('renders an input with the placeholder "Geschäft"', () => {
    render(<FilterByStore />)
    expect(screen.getByPlaceholderText('Geschäft')).toBeInTheDocument()
  })
})
