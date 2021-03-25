import { render, screen } from '@testing-library/react'

import FilterByName from './FilterByName'

describe('FilterByName', () => {
  it('renders an input with the placeholder "z.B. Minikleid"', () => {
    render(<FilterByName />)
    expect(screen.getByPlaceholderText('z.B. Minikleid')).toBeInTheDocument()
  })
})
