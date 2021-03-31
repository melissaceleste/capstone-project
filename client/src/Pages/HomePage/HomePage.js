import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import SmallCard from '../../components/SmallCard/SmallCard'
import plussrc from './plus.svg'
import Header from '../../components/Header/Header'

export default function HomePage({
  cards,
  setCards,
  hideHeader,
  setHideHeader,
}) {
  const [randomCard, setRandomCard] = useState([])
  useEffect(() => {
    cardsRandomizer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])

  return (
    <>
      <Header hideHeader={hideHeader} setHideHeader={setHideHeader} />
      <HomePageLayout>
        {randomCard.length !== 0 ? (
          <div>
            <SmallCard
              name={randomCard[0].name}
              store={randomCard[0].store}
              price={randomCard[0].price}
              date={randomCard[0].date}
              clothingType={randomCard[0].clothingType}
              urls={randomCard[0].urls}
              cards={cards}
              setCards={() => setCards()}
            />
            <RandomizerButton onClick={() => cardsRandomizer()}>
              nochmal
            </RandomizerButton>
          </div>
        ) : (
          <Link to="/addnew" style={{ textDecoration: 'none', color: 'black' }}>
            <p>Upsala. Schnell lade deine Fotos hoch!</p>
            <img src={plussrc} alt="Foto aufnehmen" width="30" height="auto" />
          </Link>
        )}
      </HomePageLayout>
    </>
  )
  function cardsRandomizer() {
    return setRandomCard(
      JSON.parse(JSON.stringify(cards)).sort(() => 0.5 - Math.random())
    )
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
  p {
    text-align: center;
    margin: 50px 50px 20px;
  }
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
