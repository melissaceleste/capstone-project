import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import AddNewPage from './Pages/AddNewPage/AddNewPage'
import HomePage from './Pages/HomePage/HomePage'
import MyClosetPage from './Pages/MyClosetPage/MyClosetPage'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import createCard from './services/createCard'
import getCards from './services/getCards'
import deleteCards from './services/deleteCard'

function App() {
  const [hidePage, setHidePage] = useState(false)

  const [loadingLandingPage, setIsLoadingLandingPage] = useState(false)
  window.setTimeout(() => {
    setIsLoadingLandingPage(true)
  }, 2000)

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
            loadingPage={loadingLandingPage}
            hideLandingPage={hidePage}
            setHideLandingPage={setHidePage}
          />
          <HomePage
            cards={cards}
            setCards={setCards}
            hideHeader={hidePage}
            setHideHeader={setHidePage}
          />
        </Route>
        <Route path="/mycloset">
          <MyClosetPage
            cards={cards}
            setCards={setCards}
            onDeleteCard={deleteCard}
            hideHeader={hidePage}
            setHideHeader={setHidePage}
          />
        </Route>
        <Route path="/addnew">
          <AddNewPage
            cards={cards}
            setCards={setCards}
            onAddNewCard={addNewCard}
            onDeleteCard={deleteCard}
            hideHeader={hidePage}
            setHideHeader={setHidePage}
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
