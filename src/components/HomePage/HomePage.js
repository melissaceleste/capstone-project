import styled from 'styled-components/macro'
import React from 'react'
import SmallCard from '../SmallCard/SmallCard'

export default function HomePage({ cards, setCards }) {
  return (
    <HomePageLayout>
      {cards.map(card => (
        <SmallCard
          name={card.name}
          store={card.store}
          price={card.price}
          date={card.date}
          clothingType={card.clothingType}
          images={card.images}
          cards={cards}
          setCards={() => setCards()}
        />
      ))}
    </HomePageLayout>
  )
}
const HomePageLayout = styled.main`
  display: grid;
  justify-content: center;
  gap: 20px;
  overflow: auto;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 70px;
`
