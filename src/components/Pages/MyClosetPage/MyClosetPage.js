import styled from 'styled-components/macro'
import Card from '../../Card/Card'
import ResetButton from '../../ResetButton/ResetButton'
import SubmitButton from '../../SubmitButton/SubmitButton'
import FilterByName from '../../Filters/FilterByName/FilterByName'
import FilterByClothingType from '../../Filters/FilterByClothingType/FilterByInputClothing'
import FilterByStore from '../../Filters/FilterByStore/FilterByStore'
import FilterByPrice from '../../Filters/FilterByPrice/FilterByPrice'
import FilterByDate from '../../Filters/FilterByDate/FilterByDate'

export default function MyClosetPage({
  userInputName,
  setUserInputName,
  userInputStore,
  setUserInputStore,
  userInputClothingType,
  setUserInputClothingType,
  userInputMinPrice,
  setUserInputMinPrice,
  userInputMaxPrice,
  setUserInputMaxPrice,
  userInputFromDate,
  setUserInputFromDate,
  userInputToDate,
  setUserInputToDate,
  cards,
  setCards,
  OnSubmitFilter,
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
        <FilterByPrice
          userInputMinPrice={userInputMinPrice}
          setUserInputMinPrice={setUserInputMinPrice}
          userInputMaxPrice={userInputMaxPrice}
          setUserInputMaxPrice={setUserInputMaxPrice}
        />
        <FilterByDate
          userInputFromDate={userInputFromDate}
          setUserInputFromDate={setUserInputFromDate}
          userInputToDate={userInputToDate}
          setUserInputToDate={setUserInputToDate}
        />
        <SubmitButton handleSubmitFilter={submitFilter}></SubmitButton>
        <ResetButton handleResetFilter={resetFilter}></ResetButton>
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
          .filter(
            card =>
              card.price >= userInputMinPrice && card.price <= userInputMaxPrice
          )

          .filter(
            card =>
              card.date >= userInputFromDate && card.date <= userInputToDate
          )

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
  function resetFilter() {
    setUserInputName('')
    setUserInputStore('')
    setUserInputClothingType('')
  }

  function submitFilter() {
    setUserInputName()
    setUserInputStore('')
    setUserInputClothingType('')
  }
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
  margin-bottom: 80px;
`
const ResultContainer = styled.section`
  display: grid;
  justify-content: center;
  gap: 20px;
`
