import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from './../images/header-logo.png'
import styledHeaderTheme from '../styles/styledHeaderTheme'
import MdMenu from 'react-icons/lib/md/menu'

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
const LogoSection = styled.section`
  height: 38px;

  a {
    padding: 0 0 6px 0;
    margin: 0;
  }

  a > img {
    width: auto;
    height: 32px;
  }

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    & {
      height: 32px;
      padding: 0 10px;
    }
    a {
      padding: 0;
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

const MobileMenuButton = styled(Link)`
  padding: 20px;
  svg {
    color: ${styledHeaderTheme.colors.black};
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    & {
      display: none;
    }
  }
`

const NavSection = styled.section`
  display: none;
  a {
    color: ${styledHeaderTheme.colors.grey};
    text-decoration: none;
    padding: 28.5px 8px;
    height: 100%;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${styledHeaderTheme.colors.blackLinkHover};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    & {
      display: flex;
    }
  }
`

const activeLinkStyle = {
  color: 'hsl(202,50%,50%)',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <MobileMenuButton to="/" activeStyle={activeLinkStyle}>
          <MdMenu />
        </MobileMenuButton>
        <LogoSection>
          <Link to="/" activeStyle={activeLinkStyle}>
            <img src={logo} alt="logo" />
          </Link>
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
        <NavSpacing />
      </Nav>
    </Header>
  )
}

export default Menu
