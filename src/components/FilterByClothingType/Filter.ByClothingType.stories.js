import Filter from './Filter.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByClothingType',
  component: Filter,
}

const DefaultFilterByClothingType = args => <Filter {...args} />

export const PimaryFilterByClothingType = DefaultFilterByClothingType.bind({})

PimaryFilterByClothingType.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
