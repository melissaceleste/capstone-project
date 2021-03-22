import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import AddNewPage from './components/Pages/AddNewPage/AddNewPage'
import HomePage from './components/Pages/HomePage/HomePage'
import MyClosetPage from './components/Pages/MyClosetPage/MyClosetPage'

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
          <HomePage cards={cards} setCards={setCards} />
        </Route>
        <Route path="/mycloset">
          <MyClosetPage cards={cards} setCards={setCards} />
        </Route>
        <Route path="/addnew">
          <AddNewPage
            cards={cards}
            setCards={setCards}
            addNewCard={addNewCard}
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
}
export default App
