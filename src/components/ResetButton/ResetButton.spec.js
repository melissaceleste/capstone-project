import { render, screen } from '@testing-library/react'

import ResetButton from './ResetButton'

describe('ResetButton', () => {
  it('renders a button with the name "reset" and the onClick Action "resetFilter"', () => {
    render(<ResetButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
