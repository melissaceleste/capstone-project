import FilterByName from './FilterByName.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByNameByName',
  component: FilterByName,
}

const DefaultFilterByNameByName = args => <FilterByName {...args} />

export const PimaryFilterByNameByName = DefaultFilterByNameByName.bind({})

PimaryFilterByNameByName.args = {
  setUserInputName: action('onChange'),
  userInputName: '',
}
