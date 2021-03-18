import FilterByStore from './FilterByStore.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FilterByStoreByName',
  component: FilterByStore,
}

const DefaultFilterByStoreByName = args => <FilterByStore {...args} />

export const PimaryFilterByStoreByName = DefaultFilterByStoreByName.bind({})

PimaryFilterByStoreByName.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
