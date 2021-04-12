import { render, screen } from '@testing-library/react'

import FilterByName from './FilterByName'

describe('FilterByName', () => {
  it('renders an input with the placeholder "Name"', () => {
    render(<FilterByName />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })
})
