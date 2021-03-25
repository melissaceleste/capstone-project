import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

import imageFile from '../../components/minikleid.png'

describe('Card', () => {
  it('renders a card with a name and an image', () => {
    render(<Card name="Minikleid" image={imageFile} />)
    expect(screen.getByText('Minikleid')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Button calls Callback onClick when clicked', () => {
    const callback = jest.fn()
    render(
      <Card name="Minikleid" image={imageFile} onHandleDeleteCard={callback} />
    )
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})