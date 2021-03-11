import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { clothes } from './coucou.json'
import styled from 'styled-components/macro'
import Filter from './components/Filter/Filter'
import { useState } from 'react'
import AddNew from './components/AddNew/AddNew'

function App() {
  const [userInput, setUserInput] = useState('')
  const [cards, setCards] = useState([])

  return (
    <>
      <Header />
      <AddNew onAddNewCard={addNewCard} />
      {cards.map(card => (
        <Card
          name={card.name}
          store={card.store}
          price={card.price}
          date={card.date}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <Filter userInput={userInput} setUserInput={setUserInput} />
      <Layout>
        {clothes
          .filter(item =>
            item.name.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(({ name, image, id, store, price, date }) => (
            <Card
              key={id}
              image={image}
              name={name}
              store={store}
              price={price}
              date={date}
            />
          ))}
      </Layout>
    </>
  )

  function addNewCard(newCard) {
    setCards([newCard, ...cards])
  }
}

export default App

const Layout = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
`
