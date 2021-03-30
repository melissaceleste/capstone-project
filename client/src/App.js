import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import AddNewPage from './Pages/AddNewPage/AddNewPage'
import HomePage from './Pages/HomePage/HomePage'
import MyClosetPage from './Pages/MyClosetPage/MyClosetPage'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import createCard from './services/createCard'
import getCards from './services/getCards'
import deleteCards from './services/deleteCard'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(data => setCards([...data]))
  }, []) /* .catch(error => handleError(error)) */

  function addNewCard(newCard) {
    createCard(newCard).then(() => getCards().then(data => setCards([...data])))
  }

  function deleteCard(currentId) {
    deleteCards(currentId).then(() => {
      getCards().then(data => setCards([...data]))
    })
  }

  return (
    <>
      <Switch>
        <WelcomePage />
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
  /*   function handleError() {
    
  } */
}

export default App
