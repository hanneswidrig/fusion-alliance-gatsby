import React from 'react'
import styled from 'styled-components'
import HeroBlock from './HeroBlock'
import HeroBackground from './HeroBackground'
import CallToAction from './CallToAction'

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 640px;
  padding: 0px inherit;
`

const HeroBanner = props => (
  <HeroSection>
    <HeroBackground />
    <HeroBlock />
    <CallToAction />
  </HeroSection>
)

export default HeroBanner
