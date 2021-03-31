import styled from 'styled-components/macro'

export default function SmallCard({ name, urls = [''] }) {
  return (
    <CardContainer>
      {urls.map(({ url }) => (
        <img key={url} src={url} alt="" width="200" height="auto" />
      ))}{' '}
      {name && <h2>{name}</h2>}
    </CardContainer>
  )
}

const CardContainer = styled.section`
  background-color: #ffffff;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  box-shadow: 1px 6px 11px 9px #eee;
  margin-left: 10px;
  display: grid;
  grid-template-rows: 90% 10%;
  justify-content: center;
  padding: 5px;
  h2 {
    font-size: 18px;
    letter-spacing: 0.2em;
    opacity: 1;
    align-self: center;
  }
  img {
    border-radius: 20px;
    max-height: 300px;
    align-self: center;
  }
`
