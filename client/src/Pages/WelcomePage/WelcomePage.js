import styled from 'styled-components/macro'
import bildsrc from './bild.jpg'
import bild1src from './bild1.jpg'
import bild2src from './bild2.jpg'
import bild3src from './bild3.jpg'
import bildendesrc from './bildende.webp'

export default function MyClosetPage({ cards, setCards, onDeleteCard }) {
  return (
    <PageLayout>
      <img src={bildsrc} alt="" width="300px" height="" />
      <NameSection>
        <div> C</div>
        <div> O</div>
        <div> U</div>
        <div> C</div>
        <div> O</div>
        <div> U</div>
      </NameSection>
      <AnimationWrapper>
        <section>
          {' '}
          <Span01>◐ </Span01>
          <Span02> ◌ </Span02>
          <Span03> ◦ </Span03>
          <Span04> ◯</Span04>
          <Span05> ◐ </Span05>
          <Span06> ◌ </Span06>
          <Span07> ◦ </Span07>
          <Span08> ◯</Span08>
        </section>
      </AnimationWrapper>
    </PageLayout>
  )
}

const PageLayout = styled.section`
  height: 100vh;
  align-items: center;
  padding: 10px;
  img {
    margin-top: 50px;
    border-radius: 90px;
  }
  /*   button {
    &.active {
      display: none;
    } */
`
const NameSection = styled.section`
  margin: 20px;
  font-size: 25px;
  display: flex;
  justify-content: center;
`
const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  //animation: span 5s infinite ease-in-out;

  @keyframes span {
    0%,
    100% {
      color: pink;
      transform: translateY(0);
    }
    50% {
      color: #3ab493;
      transform: translateY(20px);
    }
  }
`
const Span01 = styled.span`
  animation-delay: span 0.1s;
  animation: span 4s linear 1s reverse;
`
const Span02 = styled.span`
  animation-delay: span 0.2s;
  animation: span 4s linear 0.1s reverse;
`
const Span03 = styled.span`
  animation-delay: span 0.3s;
  animation: span 4s linear 0.2s reverse;
`
const Span04 = styled.span`
  animation-delay: span 0.4s;
  animation: span 4s linear 0.3s reverse;
`
const Span05 = styled.span`
  animation-delay: span 0.5s;
  animation: span 4s linear 0.4s reverse;
`
const Span06 = styled.span`
  animation-delay: span 0.6s;
  animation: span 4s linear 0.5s reverse;
`
const Span07 = styled.span`
  animation-delay: span 0.7s;
  animation: span 4s linear 0.6s reverse;
`
const Span08 = styled.span`
  animation-delay: 0.8s;
  animation: span 4s linear 0.7s reverse;
`

/* 
const Span01 = styled.span`
  animation-delay: 0.1s;
  animation: span 1s infinite ease-in;
`
const Span03 = styled.span`
  animation-delay: 0.3s;
  animation: span 2s infinite ease-in;
`
const Span04 = styled.span`
  animation-delay: 0.4s;
  animation: span 3s infinite ease-in;
`
const Span05 = styled.span`
  animation-delay: 0.5s;
  animation: span 4s infinite ease-in;
`
 */
