import FilterByStore from './FilterByStore.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByStore',
  component: FilterByStore,
}

const DefaultFilterByStore = args => <FilterByStore {...args} />

export const PimaryFilterByStore = DefaultFilterByStore.bind({})

PimaryFilterByStore.args = {
  setUserInputStore: action('onChange'),
  userInputStore: '',
}
