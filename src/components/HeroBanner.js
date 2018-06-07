import React from 'react'
import styled from 'styled-components'
import HeroBlock from './HeroBlock'
import HeroBackground from './HeroBackground'

const HeroSection = styled.section`
  font-family: ${props => props.theme.fonts.netto};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
`

const HeroBanner = props => (
  <HeroSection>
    <HeroBackground />
    <HeroBlock />
  </HeroSection>
)

export default HeroBanner
