import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const Button = styled.a`
  color: ${styledHeaderTheme.colors.blue};
  border: solid 3px ${styledHeaderTheme.colors.blue};
  border-radius: 4px;
  font-size: 1.25rem;
  text-align: center;
  text-decoration: none;
  padding: 12px 75px;
  transition: 125ms ease-in;

  &:hover {
    transform: scale(1.1);
    color: ${styledHeaderTheme.colors.blueLinkHover};
    background-color: ${styledHeaderTheme.colors.blue};
  }
`

const CallToAction = props => <Button href="#">EXPLORE</Button>

export default CallToAction
