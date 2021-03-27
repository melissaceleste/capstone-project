import styled from 'styled-components/macro'

export default function SmallCard({ name, url, images = [''] }) {
  return (
    <CardContainer>
      <h2>{name}</h2>
      {url}
      <img src={url} alt="" width="100" height="auto" />
      {/*  {images.map(image => (
        <img key={image} src={image} alt="" width="200" max-height="300px" />
      ))} */}
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
    margin-bottom: 10px;
  }
  img {
    border-radius: 20px;
  }
`
