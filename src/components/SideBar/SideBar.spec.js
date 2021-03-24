import { render, screen } from '@testing-library/react'
import SideBar from './SideBar'
import { BrowserRouter } from 'react-router-dom'

describe('SideBar', () => {
  it('renders links to "MyCloset" and "New"', () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    )
    expect(screen.getByText(/mycloset/i)).toBeInTheDocument()
    expect(screen.getByText(/new/i)).toBeInTheDocument()
  })
})
