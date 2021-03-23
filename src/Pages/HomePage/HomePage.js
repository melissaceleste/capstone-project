import { useState } from 'react'
import styled from 'styled-components/macro'
// import Randomizer from '../../components/Randomizer/Randomizer'
import SmallCard from '../../components/SmallCard/SmallCard'

export default function HomePage({ cards, setCards, handleDeleteCard }) {
  const [randomCard, setRandomCard] = useState(cardsRandomizer())
  return (
    <HomePageLayout>
      <button onClick={() => setRandomCard(cardsRandomizer())} />

      <SmallCard
        name={randomCard[0].name}
        store={randomCard[0].store}
        price={randomCard[0].price}
        date={randomCard[0].date}
        clothingType={randomCard[0].clothingType}
        images={randomCard[0].images}
        cards={cards}
        setCards={() => setCards()}
        onHandleDeleteCard={handleDeleteCard}
      />
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
`

/* export default function HomePage({ cards, setCards, handleDeleteCard }) {
  const [randomCards, setRandomCards] = useState()
  const allCards = cards.map(card => (
    <SmallCard
      name={card.name}
      store={card.store}
      price={card.price}
      date={card.date}
      clothingType={card.clothingType}
      images={card.images}
      cards={cards}
      setCards={() => setCards()}
      onHandleDeleteCard={handleDeleteCard}
    />
  ))
  return (
    <HomePageLayout>
      {/*   {cards.map(card => (
        <SmallCard
          name={card.name}
          store={card.store}
          price={card.price}
          date={card.date}
          clothingType={card.clothingType}
          images={card.images}
          cards={cards}
          setCards={() => setCards()}
          onHandleDeleteCard={handleDeleteCard}
        />
      ))} 
      <Randomizer handleRandomizeCards={setRandomCards} />
      randomCards.map(card => (
      <SmallCard
        name={card.name}
        store={card.store}
        price={card.price}
        date={card.date}
        clothingType={card.clothingType}
        images={card.images}
        cards={cards}
        setCards={() => setCards()}
        onHandleDeleteCard={handleDeleteCard}
      />
      ) )
    </HomePageLayout>
  )
   function showAllCards(cards) {
    return cards.map(card => (
      <SmallCard
        name={card.name}
        store={card.store}
        price={card.price}
        date={card.date}
        clothingType={card.clothingType}
        images={card.images}
        cards={cards}
        setCards={() => setCards()}
        onHandleDeleteCard={handleDeleteCard}
      />
    ))
  } 
  function setRandomCards() {
    const allCardsRandom = allCards.sort(() => 0.5 - Math.random())
    const randomCards = allCardsRandom.slice(0, 1)
    return randomCards
    // const randomCards = Math.floor(Math.random())
    // return setCards([cards[randomCards - 1]])
    //const randomCards = cards.sort(() => 0.5 - Math.random())
    //const randomSights = allSightsRandom.slice(0, 5)
    //return randomCards
    //return cards.sort(() => 0.5 - Math.random())
  }
} */
