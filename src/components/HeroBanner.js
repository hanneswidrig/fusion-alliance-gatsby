import React from 'react'
import styled from 'styled-components'
import HeroBlock from './HeroBlock'
import heroSVG from './../images/hero.svg'
<<<<<<< HEAD
import videoBackground from './../images/test.png'

const HeroBackground = styled.img`
  z-index: -99;
  max-height: 652px;
`
=======
>>>>>>> 8ac35d3

const HeroSection = styled.section`
  font-family: ${props => props.theme.fonts.netto};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
<<<<<<< HEAD
  position: relative;
`

const VideoBackground = styled.img`
  z-index: -1;
`

class HeroBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      originalSize: {
        height: 633,
        width: 918,
        ratio: 1.45,
      },
    }
    this.updateHeight = this.updateHeight.bind(this)
  }

  updateHeight() {
    const prevState = this.state
    const windowWidth = window.innerWidth - 30
    console.log(windowWidth)
    if (windowWidth < 918) {
      this.setState({
        height: windowWidth / prevState.originalSize.ratio,
        originalSize: prevState.originalSize,
      })
    } else this.setState(prevState)
  }

  componentDidMount() {
    this.updateHeight()
    window.addEventListener('resize', this.updateHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight)
  }

  render() {
    return (
      <HeroSection height={this.state.height}>
        <HeroBackground src={heroSVG} alt="Call to Action image" />
        <HeroBlock />
        <VideoBackground src={videoBackground} alt="background image" />
      </HeroSection>
    )
  }
}
=======
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
  max-height: 652px;
`

const HeroBanner = () => (
  <HeroSection>
    <HeroImg src={heroSVG} alt="Call to Action image" />
    <HeroBlock />
  </HeroSection>
)
>>>>>>> 8ac35d3

export default HeroBanner
