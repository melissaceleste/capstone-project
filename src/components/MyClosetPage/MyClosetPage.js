import styled from 'styled-components/macro'
import Card from '../Card/Card'
import ResetButton from '../ResetButton/ResetButton'
import FilterByName from '../FilterByName/FilterByName'
import FilterByClothingType from '../FilterByClothingType/FilterByInputClothing'
import FilterByStore from '../FilterByStore/FilterByStore'

export default function MyClosetPage({
  userInputName,
  setUserInputName,
  userInputStore,
  setUserInputStore,
  userInputClothingType,
  setUserInputClothingType,
  cards,
  setCards,
  OnResetFilter,
}) {
  return (
    <MyClosetPageLayout>
      <FormContainer>
        <h1>Such nach deinem Kleidungsstück...</h1>

        <FilterByName
          userInputName={userInputName}
          setUserInputName={setUserInputName}
        />
        <FilterByStore
          userInputStore={userInputStore}
          setUserInputStore={setUserInputStore}
        />
        <FilterByClothingType
          userInputClothingType={setUserInputClothingType}
          setUserInputClothingType={setUserInputClothingType}
        />
        <ResetButton handleOnResetFilter={OnResetFilter}></ResetButton>
      </FormContainer>
      <ResultContainer>
        {cards
          .filter(card =>
            card.name.toLowerCase().includes(userInputName.toLowerCase())
          )
          .filter(card =>
            card.store.toLowerCase().includes(userInputStore.toLowerCase())
          )
          .filter(card =>
            card.clothingType
              .toLowerCase()
              .includes(userInputClothingType.toLowerCase())
          )
          /*     .filter(
            card =>
              card.price >= { userInputMinPrice } &&
              card.price <= { userInputMaxPrice }
          )

          .filter(
            card =>
              card.date >= { userInputFromDate } &&
              card.date <= { userInputToDate }
          ) */

          .map(
            ({ name, image, id, store, price, date, clothingType, images }) => (
              <Card
                key={id}
                image={image}
                name={name}
                store={store}
                price={price}
                date={date}
                clothingType={clothingType}
                images={images}
              />
            )
          )}
      </ResultContainer>
    </MyClosetPageLayout>
  )
}
const FormContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
  h1 {
    font-size: 18px;
    margin: 2px;
  }
`

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
