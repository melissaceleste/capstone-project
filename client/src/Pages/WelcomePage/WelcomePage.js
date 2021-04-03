import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

WelcomePage.propTypes = {
  handleLoadingPage: PropTypes.func.isRequired,
  hideWelcomePage: PropTypes.string.isRequired,
  setHideWelcomePage: PropTypes.func.isRequired,
}

export default function WelcomePage({
  handleLoadingPage,
  hideWelcomePage,
  setHideWelcomePage,
}) {
  setTimeout(() => {
    setHideWelcomePage(true)
  }, 5500)
  return (
    <PageLayout hidePage={hideWelcomePage} aria-label="loading">
      <HelloSection>
        <p></p>
        <AnimationWrapper>
          <section>
            <Span01>◐</Span01>
            <Span02>◌</Span02>
            <Span03>◦</Span03>
            <Span04>◯</Span04>
            <Span05>◐</Span05>
            <Span06>◌</Span06>
            <Span07>◦</Span07>
            <Span08>◯</Span08>
          </section>
        </AnimationWrapper>
      </HelloSection>
    </PageLayout>
  )
}

const PageLayout = styled.section`
  z-index: 0;
  display: ${props => (props.hidePage ? 'none' : '')};
  height: 100vh;
  align-items: center;
  padding: 10px;
  &.fadeOut {
    opacity: 0.4;
    transition: all 6s;
  }
  i {
    font-size: 20px;
    margin-top: 80%;
  }
`
const HelloSection = styled.section`
  background-color: var(--color-white);
  margin-top: 70%;
  p {
    font-size: 25px;
    margin: 0;
  }
  p:before {
    content: '';
    animation: animate 4s;
  }
  @keyframes animate {
    0% {
      content: 'Hello!';
    }
    20% {
      content: 'Moin!';
    }
    40% {
      content: 'Aloha!';
    }
    60% {
      content: 'Ciao!';
    }
    80% {
      content: 'Huhu!';
    }
    100% {
      content: 'Coucou!';
    }
  }
`
const AnimationWrapper = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 24px;

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
  animation: span 4s linear 1s infinite reverse;
`
const Span02 = styled.span`
  animation-delay: span 0.2s;
  animation: span 4s linear 0.1s infinite reverse;
`
const Span03 = styled.span`
  animation-delay: span 0.3s;
  animation: span 4s linear 0.2s infinite reverse;
`
const Span04 = styled.span`
  animation-delay: span 0.4s;
  animation: span 4s linear 0.3s infinite reverse;
`
const Span05 = styled.span`
  animation-delay: span 0.5s;
  animation: span 4s linear 0.4s infinite reverse;
`
const Span06 = styled.span`
  animation-delay: span 0.6s;
  animation: span 4s linear 0.5s infinite reverse;
`
const Span07 = styled.span`
  animation-delay: span 0.7s;
  animation: span 4s linear 0.6s infinite reverse;
`
const Span08 = styled.span`
  animation-delay: 0.8s;
  animation: span 4s linear 0.7s infinite reverse;
`
