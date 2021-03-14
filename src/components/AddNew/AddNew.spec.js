import { render, screen } from '@testing-library/react'
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

  it('contains 8 required radio buttons with the name "clothingType"', () => {
    render(<AddNew />)
    expect(screen.getByLabelText(/Oberteil/i)).toBeRequired()
  })

  it('calls onSubmit with form data', () => {
    const callback = jest.fn()
    render(<AddNew onSubmit={callback} onAddNewCard={callback} />)
    userEvent.type(screen.getByLabelText(/name/i), 'Top')
    userEvent.type(screen.getByLabelText(/Kaufdatum/i), '2020-04-01')
    userEvent.type(screen.getByPlaceholderText(/Monki/i), 'Zara')
    userEvent.type(screen.getByPlaceholderText(/35/i), '40')
    userEvent.type('input', { name: /Kleid/i }).checked = false
    userEvent.type('input', { name: /Rock/i }).checked = false
    userEvent.type('input', { name: /Oberteil/i }).checked = true
    userEvent.type('input', { name: /Hose/i }).checked = false
    userEvent.type('input', { name: /Jacke/i }).checked = false
    userEvent.type('input', { name: /Schuhe/i }).checked = false
    userEvent.type('input', { name: /Accessoire/i }).checked = false
    userEvent.type('input', { name: /special/i }).checked = false
    userEvent.click(screen.getByText('hinzufügen'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      name: 'Top',
      date: '2021-04-01',
      store: 'Zara',
      price: '40',
      clothingType: 'Oberteil',
      images: [],
    })
  })
})
/*   it('sends onSubmit with a data object', () => {
    const callback = jest.fn()

    render(<AddNew onSubmit={callback} />)
    userEvent.type(
      screen.getByPlaceholderText(/z.B. Minikleid oder Lieblingskleid/i),
      'Minikleid'
    )
    userEvent.type(screen.getByPlaceholderText(/Monki/i), 'Monki')
    userEvent.click(screen.getByText('hinzufügen'))

    expect(callback).toHaveBeenCalled(1)
  }) */

/*     userEvent.type(screen.getByLabelText(/Kaufdatum/i), '2020-04-01')
    userEvent.type(screen.getByPlaceholderText(/Monki/i), 'Zara')
    userEvent.type(screen.getByPlaceholderText(/35/i), '40')
    userEvent.type(screen.getByLabelText(/Kleid/i)).ToBeChecked()
    userEvent.type(screen.getByLabelText(/Rock/i)).not.ToBeChecked()
    userEvent.type(screen.getByLabelText(/Hose/i)).not.ToBeChecked()
    userEvent.type(screen.getByLabelText(/Jacke/i)).not.ToBeChecked()
    userEvent.type(screen.getByLabelText(/Schuhe/i)).not.ToBeChecked()
    userEvent.type(screen.getByLabelText(/Accessoire/i)).not.ToBeChecked()
    userEvent.type(screen.getByLabelText(/special stuff/i)).not.ToBeChecked() */
