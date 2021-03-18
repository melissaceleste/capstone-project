import { render, screen } from '@testing-library/react'

import FilterByInputClothing from './FilterByInputClothing'

describe('FilterByInputClothing', () => {
  it('renders an input with the placeholder "z.B. Minikleid"', () => {
    render(<FilterByInputClothing />)
    expect(screen.getByPlaceholderText('z.B. Minikleid')).toBeInTheDocument()
  })
})
