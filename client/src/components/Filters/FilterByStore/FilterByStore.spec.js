import { render, screen } from '@testing-library/react'

import FilterByStore from './FilterByStore'

describe('FilterByStore', () => {
  it('renders an input with the placeholder "z.B. Monki"', () => {
    render(<FilterByStore />)
    expect(screen.getByPlaceholderText('z.B. Monki')).toBeInTheDocument()
  })
})
