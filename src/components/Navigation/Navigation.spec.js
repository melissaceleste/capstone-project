import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'
import { BrowserRouter } from 'react-router-dom'

describe('Navigation', () => {
  it('renders links to "MyCloset" and "New"', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    expect(screen.getByText(/mycloset/i)).toBeInTheDocument()
    expect(screen.getByText(/new/i)).toBeInTheDocument()
  })
})
