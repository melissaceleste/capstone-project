import styled from 'styled-components/macro'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'

export default function MyClosetPage({
  userInput,
  setUserInput,
  cards,
  setCards,
  handleDeleteCard,
}) {
  return (
    <MyClosetPageLayout>
      <Filter userInput={userInput} setUserInput={setUserInput} />
      <ResultContainer>
        {cards
          .filter(card =>
            card.name.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(
            ({ name, image, id, store, price, date, clothingType, images }) => (
              <Card
                key={id}
                id={id}
                image={image}
                name={name}
                store={store}
                price={price}
                date={date}
                clothingType={clothingType}
                images={images}
                onHandleDeleteCard={handleDeleteCard}
              />
            )
          )}
      </ResultContainer>
    </MyClosetPageLayout>
  )
}
const MyClosetPageLayout = styled.main`
  overflow: auto;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 30px;
`
const ResultContainer = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px;
`