import { useState } from 'react'
import styled from 'styled-components/macro'

import SmallCard from '../../components/SmallCard/SmallCard'

export default function HomePage({ cards, setCards }) {
  const [randomCard, setRandomCard] = useState(cardsRandomizer())
  return (
    <HomePageLayout>
      {randomCard.length !== 0 ? (
        <div>
          {' '}
          <SmallCard
            name={randomCard[0].name}
            store={randomCard[0].store}
            price={randomCard[0].price}
            date={randomCard[0].date}
            clothingType={randomCard[0].clothingType}
            images={randomCard[0].images}
            cards={cards}
            setCards={() => setCards()}
          />
          <RandomizerButton onClick={() => setRandomCard(cardsRandomizer())}>
            nochmal
          </RandomizerButton>
        </div>
      ) : (
        <p>
          {' '}
          Upsala. Hier hast du wohl noch keine Fotos hochgeladen. Gehe zu...
          (link folgt noch){' '}
        </p>
      )}
    </HomePageLayout>
  )
  function cardsRandomizer() {
    return JSON.parse(JSON.stringify(cards)).sort(() => 0.5 - Math.random())
  }
}
const HomePageLayout = styled.main`
  display: grid;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 70px;
  padding-top: 30px;
`
const RandomizerButton = styled.button`
  background-color: transparent;
  color: black;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 1px 1px 1px darkgrey;
  font-size: 16px;
  width: 100%;
  margin: 20px auto auto;
  padding: 5px;
`
