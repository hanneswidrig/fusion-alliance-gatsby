import React from 'react'
import styled from 'styled-components'
import heroSVG from './../images/hero.svg'

const HeroImg = styled.img`
  z-index: -1;
  max-height: 652px;
`

const HeroBackground = () => (
  <HeroImg src={heroSVG} alt="Call to Action image" />
)

export default HeroBackground
