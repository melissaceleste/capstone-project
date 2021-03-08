import React from 'react'
import Card from './Card.js'

import imageFile from './Minikleid.png'

export default {
  title: 'Card-Component',
  component: Card,
}

export const Cards = () => <Card name="Minikleid" image={imageFile} />
