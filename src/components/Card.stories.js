import React from 'react'
import Card from './Card.js'
// import { action } from '@storybook/addon-actions'
// import React from 'react'

import imageFile from './Minikleid.png'

export default {
  title: 'Card',
  component: Card,
}

export const Cards = () => <Card name="Minikleid" image={imageFile} />
