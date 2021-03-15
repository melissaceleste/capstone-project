import AddNew from './AddNew.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'AddNew',
  component: AddNew,
}

const DefaultAddNew = args => <AddNew {...args} />

export const PimaryAddNew = DefaultAddNew.bind({})

PimaryAddNew.args = {
  setUserInput: action('onSubmit'),
  userInput: '',
}
