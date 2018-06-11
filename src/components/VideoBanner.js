import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'
import videoBackground from './../images/test.png'

const VideoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const Header = styled.h1`
  color: ${styledHeaderTheme.colors.black};
  font-family: ${props => props.theme.fonts.nettoBold};
  font-size: calc(16px + 1.5vw);
  padding: 10px 0px;
  text-align: center;
`

const VideoBackground = styled.img`
  z-index: -1;
  margin-top: -150px;
  width: 100%;
  max-height: 640px;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      height: 320px;
    }
  }
`

const FloatingContainer = styled.div`
  position: absolute;
  height: 67%;
  width: 67%;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      margin-top: 20px;
    }
  }
`

const VideoBanner = () => (
  <VideoSection>
    <Header>FUSION ALLIANCE TRANSFORMS BUSINESS</Header>
    <VideoBackground src={videoBackground} alt="background image" />
    <FloatingContainer>
      <iframe
        src="https://www.youtube.com/embed/wEwEVeiSCZQ?rel=0&amp;showinfo=0"
        frameBorder="0"
        allowFullScreen
      />
    </FloatingContainer>
  </VideoSection>
)

export default VideoBanner
