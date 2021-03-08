import Card from './components/Card'
import { clothes } from './coucou.json'

function App() {
  return (
    <div>
      {clothes.map(({ name, image, id }) => (
        <Card key={id} image={image} name={name} />
      ))}
    </div>
  )
}

export default App
