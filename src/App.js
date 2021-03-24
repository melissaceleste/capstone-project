import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
// import Navigation from './components/Navigation/Navigation'
import AddNewPage from './Pages/AddNewPage/AddNewPage'
import HomePage from './Pages/HomePage/HomePage'
import MyClosetPage from './Pages/MyClosetPage/MyClosetPage'
// import BurgerButton from './components/BurgerButton/BurgerButton'
import SideBar from './components/SideBar/SideBar'

function App() {
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])

  useEffect(() => {
    saveToLocal('cards', cards)
  }, [cards])

  return (
    <>
      {/*  <BurgerButton toggleNav={toggleNav} setToggleNav={setToggleNav} /> */}
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
      <Route path={['/', '/mycloset', '/addnew']}>
        <SideBar />
        {/*  <Navigation toggleNav={toggleNav} setToggleNav={setToggleNav} /> */}
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
}
export default App
