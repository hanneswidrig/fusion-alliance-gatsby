import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from './../images/header-logo.png'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const Header = styled.header`
  border-top: 6px solid ${styledHeaderTheme.colors.blue};
  background: ${styledHeaderTheme.colors.white};
  width: 100%;
`
const Nav = styled.nav`
  width: 100%;
  height: 96px;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${styledHeaderTheme.colors.black};
    padding: 24px 8px;
    height: 100%;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      background-color: ${styledHeaderTheme.colors.blackLinkHover};
    }
  }
`
const LogoSection = styled.section`
  height: 48px;
`
const NavSection = styled.section``

const activeLinkStyle = {
  color: 'hsl(202,50%,50%)',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <LogoSection>
          <img src={logo} alt="logo" />
        </LogoSection>
        <NavSection>
          <Link to="/expertise/" activeStyle={activeLinkStyle}>
            EXPERTISE
          </Link>
          <Link to="/products/" activeStyle={activeLinkStyle}>
            PRODUCTS
          </Link>
          <Link to="/about/" activeStyle={activeLinkStyle}>
            ABOUT
          </Link>
          <Link to="/contact/" activeStyle={activeLinkStyle}>
            CONTACT
          </Link>
          <Link to="/careers/" activeStyle={activeLinkStyle}>
            CAREERS
          </Link>
        </NavSection>
      </Nav>
    </Header>
  )
}

export default Menu
