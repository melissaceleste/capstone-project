import Header from './components/Header/Header'
import { useState, useEffect } from 'react'
import { Route, Switch /*  useHistory */ } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import MyClosetPage from './components/MyClosetPage/MyClosetPage'
import AddNewPage from './components/AddNewPage/AddNewPage'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [userInputName, setUserInputName] = useState('')
  const [userInputStore, setUserInputStore] = useState('')
  const [userInputClothingType, setUserInputClothingType] = useState('')
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])
  const [userInputMinPrice, setUserInputMinPrice] = useState(0)
  const [userInputMaxPrice, setUserInputMaxPrice] = useState(200)
  const [userInputFromDate, setUserInputFromDate] = useState()
  const [userInputToDate, setUserInputToDate] = useState()

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
            userInputName={userInputName}
            setUserInputName={setUserInputName}
            userInputStore={userInputStore}
            setUserInputStore={setUserInputStore}
            userInputClothingType={userInputClothingType}
            setUserInputClothingType={setUserInputClothingType}
            userInputMinPrice={userInputMinPrice}
            setUserInputMinPrice={setUserInputMinPrice}
            userInputMaxPrice={userInputMaxPrice}
            setUserInputMaxPrice={setUserInputMaxPrice}
            userInputFromDate={userInputFromDate}
            setUserInputFromDate={setUserInputFromDate}
            userInputToDate={userInputToDate}
            setUserInputToDate={setUserInputToDate}
            OnResetFilter={resetFilter}
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
  function resetFilter() {
    setUserInputName('')
    setUserInputStore('')
    setUserInputClothingType('')
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
