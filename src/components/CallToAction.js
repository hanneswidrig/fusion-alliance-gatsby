import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const Button = styled.a`
  color: ${styledHeaderTheme.colors.blue};
  border: solid 2px ${styledHeaderTheme.colors.blue};
  border-radius: 4px;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 12px 80px 6px 80px;
  transition: 125ms ease-in;

  &:hover {
    transform: scale(1.1);
    color: ${styledHeaderTheme.colors.blueLinkHover};
    background-color: ${styledHeaderTheme.colors.blue};
  }

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    & {
      padding: 12px 40px 6px 40px;
    }
  }
`

const CallToAction = props => <Button href="#">EXPLORE</Button>

export default CallToAction