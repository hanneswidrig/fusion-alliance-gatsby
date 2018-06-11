import React from 'react'
import styled from 'styled-components'
import HeroBlock from './HeroBlock'
import heroSVG from './../images/hero.svg'
// import videoBackground from './../images/test.png'

const Filler = styled.div`
  height: ${props => props.height}px;
`

const HeroBackground = styled.img`
  z-index: -99;
  max-height: 652px;
  position: absolute;
  top: 0px;
`

const HeroSection = styled.section`
  font-family: ${props => props.theme.fonts.netto};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  position: relative;
`

// const VideoBackground = styled.img`
//   z-index: -1;
//   position: absolute;
//   bottom: 0px;
//   height: 75px;
// `

class HeroBanner extends React.Component {
  constructor() {
    super()
    this.state = {
      height: 0,
    }
    this.updateHeight = this.updateHeight.bind(this)
  }

  updateHeight() {
    this.setState({ height: 0 }) // REF IMG
  }

  componentDidMount() {
    this.updateHeight()
    window.addEventListener('load', this.updateHeight)
    window.addEventListener('resize', this.updateHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.updateHeight)
    window.removeEventListener('resize', this.updateHeight)
  }

  render() {
    return (
      <HeroSection>
        <Filler height={this.state.height} />
        <HeroBackground
          className="hero-svg"
          src={heroSVG}
          alt="Call to Action image"
        />
        <HeroBlock />
        {/* <VideoBackground src={videoBackground} alt="background image" /> */}
      </HeroSection>
    )
  }
}

export default HeroBanner
