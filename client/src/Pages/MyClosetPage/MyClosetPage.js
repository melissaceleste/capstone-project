import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import FilterByClothingType from '../../components/Filters/FilterByClothingType/FilterByInputClothing'
import FilterByDate from '../../components/Filters/FilterByDate/FilterByDate'
import FilterByName from '../../components/Filters/FilterByName/FilterByName'
import FilterByPrice from '../../components/Filters/FilterByPrice/FilterByPrice'
import FilterByStore from '../../components/Filters/FilterByStore/FilterByStore'
import ResetButton from '../../components/ResetButton/ResetButton'
import plussrc from './plus.svg'

export default function MyClosetPage({ cards, setCards, onDeleteCard }) {
  const [userInputName, setUserInputName] = useState('')
  const [userInputStore, setUserInputStore] = useState('')
  const [userInputClothingType, setUserInputClothingType] = useState('')
  const [userInputMinPrice, setUserInputMinPrice] = useState(0)
  const [userInputMaxPrice, setUserInputMaxPrice] = useState(10000)
  const [userInputFromDate, setUserInputFromDate] = useState('0000-00-00')
  const todaysDate = new Date()
  const todaysDateWithoutDays = todaysDate.toISOString().split('T')[0]
  const [userInputToDate, setUserInputToDate] = useState(todaysDateWithoutDays)
  const filteredCards = filterCards(cards)

  return (
    <MyClosetPageLayout>
      <FormContainer>
        <h1>Such nach deinem Kleidungsstück...</h1>
        <FilterByName
          userInputName={userInputName}
          setUserInputName={setUserInputName}
        />
        <FilterByStore
          userInputStore={userInputStore}
          setUserInputStore={setUserInputStore}
        />
        <FilterByClothingType
          userInputClothingType={setUserInputClothingType}
          setUserInputClothingType={setUserInputClothingType}
        />
        <FilterByPrice
          userInputMinPrice={userInputMinPrice}
          setUserInputMinPrice={setUserInputMinPrice}
          userInputMaxPrice={userInputMaxPrice}
          setUserInputMaxPrice={setUserInputMaxPrice}
        />
        <FilterByDate
          userInputFromDate={userInputFromDate}
          setUserInputFromDate={setUserInputFromDate}
          userInputToDate={userInputToDate}
          setUserInputToDate={setUserInputToDate}
        />
        <ResetButton handleResetFilter={resetFilter} />
      </FormContainer>
      {cards.length !== 0 ? (
        <ResultContainer>
          {filteredCards.map(
            ({
              name, // image,
              urls,
              _id,
              store,
              price,
              date,
              clothingType,
              //images,
            }) => (
              <Card
                key={_id}
                id={_id}
                urls={urls}
                //image={image}
                name={name}
                store={store}
                price={price}
                date={date}
                clothingType={clothingType}
                //images={images}
                setCards={setCards}
                onDeleteCard={onDeleteCard}
              />
            )
          )}
        </ResultContainer>
      ) : (
        <Link to="/addnew" style={{ textDecoration: 'none', color: 'black' }}>
          <p>Upsala. Schnell lade deine Fotos hoch!</p>
          <img src={plussrc} alt="Foto aufnehmen" width="30" height="auto" />
        </Link>
      )}
    </MyClosetPageLayout>
  )
  function resetFilter() {
    setUserInputName('')
    setUserInputStore('')
    setUserInputClothingType('')
    // setUserInputFromDate('')
  }
  function filterCards(cards) {
    return cards.filter(
      card =>
        card.name.toLowerCase().includes(userInputName.toLowerCase()) &&
        card.store.toLowerCase().includes(userInputStore.toLowerCase()) &&
        (card.clothingType
          .toLowerCase()
          .includes(userInputClothingType.toLowerCase()) ||
          card.clothingType === '') &&
        ((card.price >= userInputMinPrice && card.price <= userInputMaxPrice) ||
          card.price === '') &&
        ((card.date >= userInputFromDate && card.date <= userInputToDate) ||
          card.date === '')
    )
  }
}

const MyClosetPageLayout = styled.main`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 80px;
  z-index: auto;
  p {
    text-align: center;
    margin: 50px 50px 20px;
  }
  img {
    margin-left: 45%;
  }
`
const FormContainer = styled.form`
  display: grid;
  gap: 10px;
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 90%;
  margin: 10px auto;
  text-transform: uppercase;
  h1 {
    font-size: 18px;
    margin: 2px;
  }
`
const ResultContainer = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px;
`
