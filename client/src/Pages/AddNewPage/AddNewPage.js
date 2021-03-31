import styled from 'styled-components/macro'
import Card from '../../components/Card/Card'
import AddNew from '../../components/AddNew/AddNew'
import Header from '../../components/Header/Header'

export default function AddNewPage({
  onAddNewCard,
  cards,
  setCards,
  onDeleteCard,
  hideHeader,
  setHideHeader,
}) {
  return (
    <>
      <Header hideHeader={hideHeader} setHideHeader={setHideHeader} />
      <AddNewPageLayout>
        <AddNew onAddNewCard={onAddNewCard} />
        <ResultContainer>
          {cards.map(card => (
            <Card
              key={card._id}
              id={card._id}
              name={card.name}
              store={card.store}
              price={card.price}
              date={card.date}
              clothingType={card.clothingType}
              urls={card.urls}
              cards={cards}
              setCards={() => setCards()}
              onDeleteCard={onDeleteCard}
            />
          ))}
        </ResultContainer>
      </AddNewPageLayout>
    </>
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
