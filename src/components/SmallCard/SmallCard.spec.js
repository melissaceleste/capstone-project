import { render, screen } from '@testing-library/react'

import SmallCard from './SmallCard'

import imageFile from '../../components/minikleid.png'

describe('SmallCard', () => {
  it('renders a SmallCard with a name and an image', () => {
    render(<SmallCard name="Minikleid" image={imageFile} />)
    expect(screen.getByText('Minikleid')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
