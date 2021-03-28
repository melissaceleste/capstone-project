import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import AddNewPage from './Pages/AddNewPage/AddNewPage'
import HomePage from './Pages/HomePage/HomePage'
import MyClosetPage from './Pages/MyClosetPage/MyClosetPage'
import createCard from './services/createCard'
import getCards from './services/getCards'
import deleteCards from './services/deleteCard'

function App() {
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])

  useEffect(() => {
    saveToLocal('cards', cards)
  }, [cards])

  /* const [cards, setCards] = useState([])
  // ----- get -------
  useEffect(() => {
    getCards().then(data => setCards([...data]))
  }, [])

  // ---- post/create ----

  function addNewCard(id, name, store, price, date, clothingType, urls) {
    createCard(
      id,
      name,
      store,
      price,
      date,
      clothingType,
      urls
      // JSON.stringify(urls)
    ).then(data => setCards([data, ...cards]))
  }

  // ----- delete----
  function deleteCard(currentId) {
    deleteCards(currentId).then(() => {
      const newCardList = cards.filter(card => card._id !== currentId)
      setCards(newCardList)
    })
  } */

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage cards={cards} setCards={setCards} />
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
      <Route path={['/', '/mycloset', '/addnew']}></Route>
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
}

export default App
