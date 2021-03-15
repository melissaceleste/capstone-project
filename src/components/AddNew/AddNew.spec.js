import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddNew from './AddNew'

describe('AddNew', () => {
  it('renders a form with 12 inputs and a submit-button', () => {
    render(<AddNew />)
    expect(screen.getByText('hinzufügen')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/z.B. Minikleid oder Lieblingskleid/i)
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Kaufdatum/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Monki/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/35/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Oberteil/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Kleid/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Rock/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Hose/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Jacke/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Schuhe/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Accessoire/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/special stuff/i)).toBeInTheDocument()
  })

  /*  it('contains required radio buttons with the name "clothingType"', () => {
    render(<AddNew />)
    expect(screen.getByLabelText(/Oberteil/i)).toBeRequired()
  }) */

  it('calls onSubmit with form data', () => {
    const callback = jest.fn()
    render(<AddNew onAddNewCard={callback} />)
    userEvent.type(screen.getByLabelText(/name/i), 'Minikleid')
    userEvent.type(screen.getByLabelText(/Kaufdatum/i), '2020-04-01')
    userEvent.type(screen.getByPlaceholderText(/Monki/i), 'Zara')
    userEvent.type(screen.getByPlaceholderText(/35/i), '40')
    fireEvent.change(screen.getByLabelText('Kleid'), {
      target: { value: 'Kleid' },
    })
    fireEvent.click(screen.getByLabelText('Kleid'))
    screen.debug()
    /* userEvent.click('input', { name: /Rock/i }).checked = false
    userEvent.click('input', { name: /Oberteil/i }).checked = false
    userEvent.click('input', { name: /Hose/i }).checked = false
    userEvent.click('input', { name: /Jacke/i }).checked = false
    userEvent.click('input', { name: /Schuhe/i }).checked = false
    userEvent.click('input', { name: /Accessoire/i }).checked = false
    userEvent.click('input', { name: /special/i }).checked = false */
    userEvent.click(screen.getByText('hinzufügen'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      name: 'Minikleid',
      date: '2020-04-01',
      store: 'Zara',
      price: '40',
      clothingType: 'Kleid',
      images: [],
    })
  })
})