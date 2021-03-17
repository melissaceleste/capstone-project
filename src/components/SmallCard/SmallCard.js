import styled from 'styled-components/macro'

export default function SmallCard({ name, images = [''] }) {
  return (
    <CardContainer>
      <h2>{name}</h2>
      {images.map(image => (
        <img key={image} src={image} alt="" width="100" height="auto" />
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
`
