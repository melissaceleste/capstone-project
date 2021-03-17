import Header from './components/Header/Header'
import { useState, useEffect } from 'react'
import { Route, Switch /*  useHistory */ } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import MyClosetPage from './components/MyClosetPage/MyClosetPage'
import AddNewPage from './components/AddNewPage/AddNewPage'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [userInput, setUserInput] = useState('')
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
          <MyClosetPage
            cards={cards}
            setCards={setCards}
            userInput={userInput}
            setUserInput={setUserInput}
          />
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
    //localStorage.clear()
  }
  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    const data = JSON.parse(jsonString)
    return data
  }
}

export default App
