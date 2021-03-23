import FilterByPrice from './FilterByPrice.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByPrice',
  component: FilterByPrice,
}

const DefaultFilterByPrice = args => <FilterByPrice {...args} />

export const PimaryFilterByPrice = DefaultFilterByPrice.bind({})

PimaryFilterByPrice.args = {
  setUserInputMinPrice: action('onChange'),
  userInputMinPrice: '',
  setUserInputMaxPrice: action('onChange'),
  userInputMaxPrice: '',
}
