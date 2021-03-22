import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import AddNew from '../../components/AddNew/AddNew'

export default function AddNewPage({ addNewCard, cards, setCards }) {
  return (
    <AddNewPageLayout>
      <AddNew onAddNewCard={addNewCard} />
      <ResultContainer>
        {cards.map(card => (
          <Card
            name={card.name}
            store={card.store}
            price={card.price}
            date={card.date}
            clothingType={card.clothingType}
            images={card.images}
            cards={cards}
            setCards={() => setCards()}
          />
        ))}
      </ResultContainer>
    </AddNewPageLayout>
  )
}
const AddNewPageLayout = styled.main`
  display: grid;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 50px;
`
const ResultContainer = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px;
`
