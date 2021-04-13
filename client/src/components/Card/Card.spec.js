import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

import imageFile from './minikleid.png'

describe('Card', () => {
  it('renders a card with a name and an image', () => {
    render(<Card name="Minikleid" image={imageFile} />)
    expect(screen.getByText('Minikleid')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('calls the callback by clicking on the delete button', () => {
    const callback = jest.fn()
    render(<Card name="Minikleid" image={imageFile} />)
    const button = screen.getByLabelText('delete')
   userEvent.click(button)
   expect(callback).toHaveBeenCalledTimes(1)
   screen.debug()
  })
})
