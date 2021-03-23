import FilterByDate from './FilterByDate.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByDate',
  component: FilterByDate,
}

const DefaultFilterByDate = args => <FilterByDate {...args} />

export const PimaryFilterByDate = DefaultFilterByDate.bind({})

PimaryFilterByDate.args = {
  setUserInputFromDate: action('onChange'),
  userInputFromDate: '',
  setUserInputToDate: action('onChange'),
  userInputToDate: '',
}
