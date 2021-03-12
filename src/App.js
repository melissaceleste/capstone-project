import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { clothes } from './coucou.json'
import styled from 'styled-components/macro'
import Filter from './components/Filter/Filter'
import { useState, useEffect } from 'react'
import AddNew from './components/AddNew/AddNew'

function App() {
  const [userInput, setUserInput] = useState('')
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])

  useEffect(() => {
    saveToLocal('cards', cards)
  }, [cards])

  return (
    <>
      <Header />

      <AddNew onAddNewCard={addNewCard} />
      {/* ---- cards created by form */}
      {cards.map(card => (
        <Card
          name={card.name}
          store={card.store}
          price={card.price}
          date={card.date}
          clothingType={card.clothingType}
          images={card.images}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <Filter userInput={userInput} setUserInput={setUserInput} />
      <Layout>
        {/*  ------ static cards ---- */}
        {clothes
          .filter(item =>
            item.name.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(
            ({ name, image, id, store, price, date, clothingType, images }) => (
              <Card
                key={id}
                image={image}
                name={name}
                store={store}
                price={price}
                date={date}
                clothingType={clothingType}
                images={images}
              />
            )
          )}
      </Layout>
    </>
  )

  function addNewCard(newCard) {
    setCards([newCard, ...cards])
  }
  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
    localStorage.clear()
  }

  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    const data = JSON.parse(jsonString)
    return data
  }
}

export default App

const Layout = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
`
