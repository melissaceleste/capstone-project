import { render, screen } from '@testing-library/react'
import SideBar from './SideBar'
import { BrowserRouter } from 'react-router-dom'

describe('SideBar', () => {
  it('renders links to "inspire me" and "new"', () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    )
    expect(screen.getByText(/inspire/i)).toBeInTheDocument()
    expect(screen.getByText(/new/i)).toBeInTheDocument()
  })
})
