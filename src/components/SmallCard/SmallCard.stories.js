import React from 'react'
import SmallCard from './SmallCard.js'

import imageFile from '../../components/minikleid.png'

export default {
  title: 'SmallCard-Component',
  component: SmallCard,
}

export const DefaultSmallCard = () => (
  <SmallCard name="Minikleid" image={imageFile} />
)
