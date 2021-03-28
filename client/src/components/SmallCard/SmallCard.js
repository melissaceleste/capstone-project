import styled from 'styled-components/macro'

export default function SmallCard({ name, urls = [''] }) {
  return (
    <CardContainer>
      <h2>{name}</h2>
      {urls.map(({ url }) => (
        <img key={url} src={url} alt="" width="100" height="auto" />
      ))}
    </CardContainer>
  )
}

const CardContainer = styled.section`
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  box-shadow: 1px 6px 11px 9px #eee;
  h2 {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 0;
    letter-spacing: 0.2em;
    text-align: center;
    opacity: 1;
    text-transform: uppercase;
  }
  img {
    border-radius: 20px;
  }
`
