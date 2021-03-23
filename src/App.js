import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import AddNewPage from './Pages/AddNewPage/AddNewPage'
import HomePage from './Pages/HomePage/HomePage'
import MyClosetPage from './Pages/MyClosetPage/MyClosetPage'

function App() {
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])

  useEffect(() => {
    saveToLocal('cards', cards)
  }, [cards])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage
            cards={cards}
            setCards={setCards}
            // handleCardsRandomizer={cardsRandomizer}
          />
        </Route>
        <Route path="/mycloset">
          <MyClosetPage
            cards={cards}
            setCards={setCards}
            onDeleteCard={deleteCard}
          />
        </Route>
        <Route path="/addnew">
          <AddNewPage
            cards={cards}
            setCards={setCards}
            onAddNewCard={addNewCard}
            onDeleteCard={deleteCard}
          />
        </Route>
      </Switch>
      <Route path={['/', '/mycloset', '/addnew']}>
        <Navigation />
      </Route>
    </>
  )

  function addNewCard(newCard) {
    setCards([newCard, ...cards])
  }
  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    const data = JSON.parse(jsonString)
    return data
  }

  function deleteCard(currentId) {
    const newCardList = cards.filter(card => card.id !== currentId)
    setCards(newCardList)
  }
  //function cardsRandomizer() {
  /* const allRandomCards = cards.sort(() => 0.5 - Math.random())
    const randomCards = allRandomCards.slice(0, 3)
    return randomCards */
  // randomCards = cards[Math.floor(Math.random() * cards.length)]
  // }
}
export default App
