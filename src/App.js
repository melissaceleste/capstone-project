import { useEffect, useState } from 'react'
import { Route, Switch /*  useHistory */ } from 'react-router-dom'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import AddNewPage from './components/Pages/AddNewPage/AddNewPage'
import HomePage from './components/Pages/HomePage/HomePage'
import MyClosetPage from './components/Pages/MyClosetPage/MyClosetPage'

function App() {
  const [userInputName, setUserInputName] = useState('')
  const [userInputStore, setUserInputStore] = useState('')
  const [userInputClothingType, setUserInputClothingType] = useState('')
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])
  const [userInputMinPrice, setUserInputMinPrice] = useState(0)
  const [userInputMaxPrice, setUserInputMaxPrice] = useState(500)
  const [userInputFromDate, setUserInputFromDate] = useState('2019-02-01')
  const [userInputToDate, setUserInputToDate] = useState('2021-04-01')

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
