import { render, screen } from '@testing-library/react'

import Filter from './Filter'

describe('Filter', () => {
  it('renders an input with the placeholder "z.B. Minikleid"', () => {
    render(<Filter />)
    expect(screen.getByPlaceholderText('z.B. Minikleid')).toBeInTheDocument()
  })
})
