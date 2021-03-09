import Card from './components/Card'
import Header from './components/Header'
import { clothes } from './coucou.json'
import styled from 'styled-components/macro'
import Filter from './components/Filter'
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState('')

  return (
    <>
      <Header />
      <Filter userInput={userInput} setUserInput={setUserInput} />
      <Layout>
        {clothes
          .filter(item =>
            item.name.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(({ name, image, id }) => (
            <Card key={id} image={image} name={name} />
          ))}

        {/* {clothes.map(({ name, image, id }) => (
          <Card key={id} image={image} name={name} />
        ))}

        {clothes.filter(card =>
          card.name.toLowerCase().includes(userInput.toLowerCase())
        )} */}
      </Layout>
    </>
  )
}

export default App

const Layout = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
`
