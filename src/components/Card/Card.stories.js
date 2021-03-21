import Card from './Card.js'
import { action } from '@storybook/addon-actions'

import imageFile from './test.png'

export default {
  title: 'Card-Component',
  component: Card,
}

const DefaultCard = args => <Card {...args} />

export const PrimaryCard = DefaultCard.bind({})

PrimaryCard.args = {
  name: 'Minikleid',
  image: imageFile,
  clothingType: 'Kleider',
  store: 'Monki',
  price: 20,
  date: '2020-03-03',
  onHandleDeleteCard: action('onClick'),
}
