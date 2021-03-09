import React from 'react'
import Filter from './Filter.js'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Filter',
  component: Filter,
}

const onChange = action('onChange')
export const DefaultFilter = () => Filter(onChange)
