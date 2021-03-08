import Card from './components/Card'
import Header from './components/Header'
import { clothes } from './coucou.json'
import styled from 'styled-components/macro'

function App() {
  return (
    <>
      <Header />
      <Layout>
        {clothes.map(({ name, image, id }) => (
          <Card key={id} image={image} name={name} />
        ))}
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
