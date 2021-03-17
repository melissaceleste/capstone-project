import styled from 'styled-components/macro'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'

export default function MyClosetPage({
  userInputName,
  setUserInputName,
  userInputStore,
  setUserInputStore,
  userInputClothingType,
  setUserInputClothingType,
  cards,
  setCards,
  userInputMaxPrice,
  userInputMinPrice,
  setUserInputMaxPrice,
  setUserInputMinPrice,
}) {
  return (
    <MyClosetPageLayout>
      <Filter
        userInputName={userInputName}
        setUserInputName={setUserInputName}
        userInputStore={userInputStore}
        setUserInputStore={setUserInputStore}
        userInputClothingType={setUserInputClothingType}
        setUserInputClothingType={setUserInputClothingType}
        userInputMinPrice={userInputMinPrice}
        setUserInputMinPrice={setUserInputMinPrice}
        userInputMaxPrice={userInputMaxPrice}
        setUserInpuMaxPrice={setUserInputMaxPrice}
      />
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

          /* function filterMovies(value) {
            setFilteredMovies(
              value === 'all'
                ? movies
                : movies.filter(movie => movie.foodCategory === value)
            )
          } */

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
