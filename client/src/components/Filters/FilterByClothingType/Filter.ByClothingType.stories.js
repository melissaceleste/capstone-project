import { action } from '@storybook/addon-actions'
import FilterByClothingType from './FilterByInputClothing.js'

export default {
  title: 'FilterByClothingType',
  component: FilterByClothingType,
}

const DefaultFilterByClothingType = args => <FilterByClothingType {...args} />

export const PimaryFilterByClothingType = DefaultFilterByClothingType.bind({})

PimaryFilterByClothingType.args = {
  setUserInputClothingType: action('onChange'),
  userInputClothingType: '',
}
