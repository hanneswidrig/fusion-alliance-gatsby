import NavSection from './NavSection'
import MobileMenuButton from './MobileMenuButton'
import LogoSection from './LogoSection'

import React from 'react'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const Header = styled.header`
  border-top: 6px solid ${styledHeaderTheme.colors.blue};
  background: ${styledHeaderTheme.colors.white};
  width: 100%;
  font-family: ${props => props.theme.fonts.nettoBold};
`

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    & {
      height: 64px;
      padding: 0 10px;
    }
  }
`

const NavSpacing = styled.div`
  padding: 32px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    & {
      display: none;
    }
  }
`

const Menu = () => {
  return (
    <Header>
      <Nav>
        <MobileMenuButton />
        <LogoSection />
        <NavSection />
        <NavSpacing />
      </Nav>
    </Header>
  )
}

export default Menu
