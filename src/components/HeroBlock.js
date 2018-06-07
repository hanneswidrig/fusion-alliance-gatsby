import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'
import CallToAction from './CallToAction'

const HeroFloatingWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: calc(100px - 5vw);
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 60%;
  text-align: center;
`

const HeroTitle = styled.div`
  font-size: calc(16px + 2.75vw);
  font-family: ${props => props.theme.fonts.nettoBold};
  color: ${styledHeaderTheme.colors.blue};
`

const HeroTitleDetails = styled.div`
  font-family: ${props => props.theme.fonts.metaWeb};
  padding: 8px 0px 14px 0px;
  line-height: 1.25rem;
  width: 90%;
`

const HeroBlock = props => (
  <HeroFloatingWrapper>
    <HeroWrapper>
      <HeroTitle>IDEAS TO EXECUTION</HeroTitle>
      <HeroTitleDetails>
        Our experts dig deep into the latest marketing, data, and tech trends,
        providing insights for CIOs, CMOs, marketing directors, tech leaders,
        and more.
      </HeroTitleDetails>
      <CallToAction />
    </HeroWrapper>
  </HeroFloatingWrapper>
)

export default HeroBlock