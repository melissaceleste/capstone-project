import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import AddNewPage from './pages/AddNewPage/AddNewPage'
import HomePage from './pages/HomePage/HomePage'
import MyClosetPage from './pages/MyClosetPage/MyClosetPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import createCard from './services/createCard'
import getCards from './services/getCards'
import deleteCards from './services/deleteCard'

function App() {
  const [hideContent, setHideContent] = useState(false)
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
        <Route exact path="/">
          <WelcomePage
            hideWelcomePage={hideContent}
            setHideWelcomePage={setHideContent}
          />
          <HomePage
            cards={cards}
            setCards={setCards}

            hideHomePage={hideContent}
            setHideHomePage={setHideContent}
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
      <Route path={['/', '/mycloset', '/addnew']}></Route>
    </>
  )
}

export default App
