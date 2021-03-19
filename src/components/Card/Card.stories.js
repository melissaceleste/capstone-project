import React from 'react'
import Card from './Card.js'

import imageFile from '../Card/minikleid.png'

export default {
  title: 'Card-Component',
  component: Card,
}

export const DefaultCard = () => <Card name="Minikleid" image={imageFile} />
