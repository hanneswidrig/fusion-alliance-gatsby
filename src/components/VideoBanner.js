import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'
import videoBackground from './../images/test.png'

const VideoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
`

const Header = styled.h1`
  color: ${styledHeaderTheme.colors.black};
  font-family: ${props => props.theme.fonts.nettoBold};
  font-size: calc(16px + 1.5vw);
  padding: 10px 0px;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      padding-top: 120px;
    }
  }
`

const VideoBackground = styled.img`
  z-index: -1;
  position: absolute;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      height: 450px;
    }
  }
`

const VideoBanner = () => (
  <VideoSection>
    <Header>FUSION ALLIANCE TRANSFORMS BUSINESS</Header>
    <VideoBackground src={videoBackground} alt="background image" />
    <div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/wEwEVeiSCZQ"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </VideoSection>
)

export default VideoBanner
