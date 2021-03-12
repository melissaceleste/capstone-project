import styled from 'styled-components/macro'

export default function Card({
  name,
  store,
  price,
  date,
  images,
  clothingType,
}) {
  return (
    <CardContainer>
      <h2>{name}</h2>
      <ul>
        <li> {clothingType}</li>
        <li> {store}</li>
        <li>{price !== '' ? price + '€' : ''}</li>
        <li>{date} </li>
      </ul>
      {images.map(image => (
        <img
          key={image} /* key={image.data_url} */
          src={image}
          alt=""
          width="100"
          height="100"
        />
      ))}
    </CardContainer>
  )
}

const CardContainer = styled.section`
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
  width: 200px;
  box-shadow: 1px 6px 11px 9px #eee;

  h2 {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 0;
  }

  img {
    border-radius: 20px;
  }
  ul {
    text-align: left;
    list-style-type: none;
    margin-top: 0;
  }
`
