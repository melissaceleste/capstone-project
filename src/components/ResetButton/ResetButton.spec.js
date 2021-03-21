import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResetButton from './ResetButton'

describe('ResetButton', () => {
  it('renders a button with the name "reset" and the onClick Action "resetFilter"', () => {
    const callback = jest.fn()
    render(<ResetButton onClick={callback} />)
    /*     expect(screen.getByRole('button')).toBeInTheDocument() */
    userEvent.click(screen.getByText('reset'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
