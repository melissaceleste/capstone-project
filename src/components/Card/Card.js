import styled from 'styled-components/macro'
import React from 'react'

export default function Card({ name, image }) {
  return (
    <CardContainer>
      <H2>{name}</H2>
      <IMG src={image} alt="" width="100" height="100" />
    </CardContainer>
  )
}

const CardContainer = styled.section`
  background-color: whitesmoke;
  text-align: center;
  border-radius: 20px;
  width: 200px;
  box-shadow: 3px 3px 3px #eee;
`

const H2 = styled.h2`
  font-size: 18px;
`

const IMG = styled.img`
  border-radius: 20px;
`
