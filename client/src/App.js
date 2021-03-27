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
  const [image, setImage] = useState('')

  // --------------------------------------------------------
  const [cards, setCards] = useState([])

  /*   useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => setCards([...data]))
  }, []) */

  // ----- get -------
  useEffect(() => {
    getCards().then(data => setCards([...data]))
  }, [])

  // ---- post/create ----

  function addNewCard(id, name, store, price, date, clothingType, images) {
    createCard(id, name, store, price, date, clothingType, images).then(data =>
      setCards([data, ...cards])
    )
  }

  /*   function addNewCard(newCard) {
    createCard(newCard).then(data => setCards([data, ...cards]))
  } */

  // ----- delete----
  function deleteCard(currentId) {
    deleteCards(currentId).then(() => {
      const newCardList = cards.filter(card => card._id !== currentId)
      setCards(newCardList)
    })
  }

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
            image={image}
            setImage={setImage}
          />
        </Route>
      </Switch>
      <Route path={['/', '/mycloset', '/addnew']}></Route>
    </>
  )
}

export default App
