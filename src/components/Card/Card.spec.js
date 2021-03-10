import { render, screen } from '@testing-library/react'

import Card from './Card'

import imageFile from '../../components/minikleid.png'

describe('Card', () => {
  it('renders a card with a name and an image', () => {
    render(<Card name="Minikleid" image={imageFile} />)
    expect(screen.getByText('Minikleid')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
