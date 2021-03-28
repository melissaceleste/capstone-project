import Upload from './Upload.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Upload',
  component: Upload,
}

const DefaultUpload = args => <Upload {...args} />

export const PimaryUpload = DefaultUpload.bind({})

PimaryUpload.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
