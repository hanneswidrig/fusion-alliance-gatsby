import React from 'react'
import styled from 'styled-components'
import heroSVG from './../images/hero.svg'

const HeroImg = styled.img`
  position: absolute;
  z-index: -1;
`

const HeroBackground = () => (
  <HeroImg src={heroSVG} alt="Call to Action image" />
)

export default HeroBackground
