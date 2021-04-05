import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Card.propTypes = {
  onAddNewCard: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  store: PropTypes.string,
  price: PropTypes.number,
  date: PropTypes.string,
  clothingType: PropTypes.string,
  onDeleteCard: PropTypes.func,
  urls: PropTypes.array,
}

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
        <img key={url} src={url} alt="" width="170" height="auto" />
      ))}
      <h2>{name}</h2>
      <ul>
        <li>{clothingType}</li>
        <li>{store}</li>
        <li>{price !== null ? price + '€' : ''} </li>
        <li>{date} </li>
      </ul>
      <button onClick={() => onDeleteCard(id)} aria-label="delete">
        ✕
      </button>
    </CardContainer>
  )
}

const CardContainer = styled.section`
  background-color: var(--color-cards);
  text-align: center;
  border-radius: 20px;
  width: 200px;
  box-shadow: 1px 6px 11px 9px var(--color-boxshadow);
  position: relative;
  padding: 5px;
  h2 {
    font-size: 14px;
    margin-top: 0;
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
    background-color: var(--color-white);
    border-radius: 10px;
    font-size: 16px;
    position: absolute;
    right: 0;
    top: 7px;
    outline: none;
  }
`
