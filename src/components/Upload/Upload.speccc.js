/* import {
  fireEvent,
  getByLabelText,
  getByRole,
  getByTitle,
  queryByLabelText,
  queryByTitle,
  render,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Upload from './Upload'

describe('Upload', () => {
  it('renders two buttons', () => {
    render(<Upload />)
    expect(screen.getAllByRole('button')).toBeInTheDocument()
  })
  it('renders an upload and a remove button', () => {
    render(<Upload />)
    const uploadButton = getByLabelText('uploadButton')
    expect(uploadButton).toBeInTheDocument()
    const removeButton = getByLabelText('removeButton')
    expect(removeButton).toBeInTheDocument()
  })
  it('calls onImageUpload when UploadButton is clicked', () => {
    const handleClick = jest.fn()
    const UploadButton = queryByLabelText('uploadButton')
    render(<UploadButton onclick={handleClick} />)
    userEvent.click(screen.getByText('Click or Drop here 📷'))
    expect(handleClick).toHaveBeenCalled(1)
  })
})
 


import React from 'react';
import { createEvent, render } from '@testing-library/react';

describe('input', () => {
  it('creates an event', () => {
    const input: HTMLInputElement = render(<input />);
    const event: React.FormEvent<HTMLInputElement> = createEvent.change(input, {})
  });
});
*/
