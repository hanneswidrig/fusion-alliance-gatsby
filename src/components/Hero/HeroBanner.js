import React from 'react'
import styled from 'styled-components'
import HeroBlock from './HeroBlock'
import heroSVG from './../../images/hero.svg'
import videoBackground from './../../images/waves.png'

const HeroSection = styled.section`
  font-family: ${props => props.theme.fonts.netto};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      min-height: 250px;
      height: calc(100vw - 200px);
    }
    img {
      display: none;
    }
  }
`

const HeroImg = styled.img`
  z-index: -1;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const VideoBackground = styled.img`
  z-index: -1;
  margin-top: -40px;
  width: 100vw;
  height: 40px;
`

const HeroBanner = () => (
  <HeroSection>
    <HeroImg src={heroSVG} alt="Call to Action image" />
    <HeroBlock />
    <VideoBackground src={videoBackground} alt="background image" />
  </HeroSection>
)

export default HeroBanner
