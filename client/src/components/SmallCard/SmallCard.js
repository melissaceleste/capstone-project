import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SmallCard.propTypes = {
  name: PropTypes.string,
  urls: PropTypes.array,
}

export default function SmallCard({ name, urls = [''] }) {
  return (
    <CardContainer>
      {urls.map(({ url }) => (
        <img key={url} src={url} alt="" width="250" height="auto" />
      ))}
      {name && <h2>{name}</h2>}
    </CardContainer>
  )
}

const CardContainer = styled.section`
  background-color: var(--color-cards);
  text-align: center;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  box-shadow: 1px 6px 11px 9px var(--color-boxshadow);
  margin-left: 10px;
  justify-content: center;
  padding: 5px;
  h2 {
    font-size: 16px;
    letter-spacing: 0.2em;
    opacity: 1;
    align-self: center;
    margin-top: 4px;
    margin-bottom: 0;
  }
  img {
    border-radius: 20px;
    max-height: 300px;
    align-self: center;
  }
`
