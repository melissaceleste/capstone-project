import styled from 'styled-components/macro'

export default function Card({
  name,
  id,
  store,
  price,
  date,
  clothingType,
  onDeleteCard,
  urls = [''],
}) {
  return (
    <CardContainer>
      {urls.map(({ url }) => (
        <img key={url} src={url} alt="" width="100" height="auto" />
      ))}
      <h2>{name}</h2>
      <ul>
        <li>{clothingType}</li>
        <li>{store}</li>
        <li>{price !== null ? price + '€' : ''} </li>
        <li>{date} </li>
      </ul>
      <button onClick={() => onDeleteCard(id)}> ✕ </button>
    </CardContainer>
  )
}
const CardContainer = styled.section`
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
  width: 200px;
  box-shadow: 1px 6px 11px 9px #eee;
  position: relative;
  padding: 5px;
  h2 {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 0;
    letter-spacing: 0.2em;
    text-align: center;
    opacity: 1;
  }
  img {
    border-radius: 20px;
    align-items: center;
  }
  ul {
    text-align: center;
    list-style-type: none;
    margin-top: 0;
    padding: 0;
    letter-spacing: 0.1em;
    opacity: 1;
    font-size: 10px;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`
