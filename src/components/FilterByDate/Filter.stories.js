import Filter from './Filter.js.js.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByName',
  component: Filter,
}

const DefaultFilterByName = args => <Filter {...args} />

export const PimaryFilterByName = DefaultFilterByName.bind({})

PimaryFilterByName.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
