import styled from 'styled-components/macro'
import Card from '../../Card/Card'
import FilterByClothingType from '../../Filters/FilterByClothingType/FilterByInputClothing'
import FilterByDate from '../../Filters/FilterByDate/FilterByDate'
// import SubmitButton from '../../SubmitButton/SubmitButton'
import FilterByName from '../../Filters/FilterByName/FilterByName'
import FilterByPrice from '../../Filters/FilterByPrice/FilterByPrice'
import FilterByStore from '../../Filters/FilterByStore/FilterByStore'
import ResetButton from '../../ResetButton/ResetButton'

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
          .filter(
            card =>
              card.clothingType
                .toLowerCase()
                .includes(userInputClothingType.toLowerCase()) ||
              card.clothingType === ''
          )
          .filter(
            card =>
              (card.price >= userInputMinPrice &&
                card.price <= userInputMaxPrice) ||
              card.price === ''
          )

          .filter(
            card =>
              (card.date >= userInputFromDate &&
                card.date <= userInputToDate) ||
              card.date === ''
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
        {console.log(userInputFromDate)}
      </ResultContainer>
    </MyClosetPageLayout>
  )
  function resetFilter() {
    setUserInputName('')
    setUserInputStore('')
    setUserInputClothingType('')
  }
}
const FormContainer = styled.form`
  background-color: whitesmoke;
  box-shadow: 3px 3px 3px #eee;
  padding: 10px;
  width: 90%;
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
