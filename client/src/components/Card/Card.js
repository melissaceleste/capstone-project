import styled from 'styled-components/macro'

export default function Card({
  name,
  id,
  store,
  price,
  date,
  //image,
  //images = [''],
  url,
  clothingType,
  onDeleteCard,
}) {
  return (
    <CardContainer>
      <h2>{name}</h2>
      {url}
      <img src={url} alt="" width="100" height="auto" />
      {/*    {images.map(image => (
        <img key={image} src={image} alt="" width="100" height="auto" /> 
        <img src="data:image/<%=image.img.contentType%>;base64,
        <%=image.img.data.toString('base64')%>">   
      ))}
       <img key={images} src={images} alt="" width="100" height="auto" /> 
 */}
      <ul>
        <li>{clothingType}</li>
        <li>{store}</li>
        <li>{price !== '' ? price + '€' : ''}</li>
        <li>{date} </li>
      </ul>
      <DeleteButton onClick={() => onDeleteCard(id)}> ✕ </DeleteButton>
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
const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
  // color: tomato;
  // border-radius: 100%;
  // border: 1px solid;
`
