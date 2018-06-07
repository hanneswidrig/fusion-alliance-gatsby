import NavSection from './NavSection'
import LogoSection from './LogoSection'
import MobileNavSection from './MobileNavSection'

import React from 'react'
import styled from 'styled-components'
import MdMenu from 'react-icons/lib/md/menu'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const NavSpacing = styled.div`
  padding: 32px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    & {
      display: none;
    }
  }
`

const NavBar = styled.section`
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
      padding: 0 10px;
    }
  }
`

const MobileMenuWrapper = styled.div`
  padding: 20px;
  cursor: pointer;

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

const NavWrapper = styled.nav`
  height: ${props => (props.active ? '364px' : '80px')};
  transition: 100ms ease-in-out;
  box-shadow: ${props =>
    props.active ? '0px 1px 5px 0px rgba(50, 50, 50, 0.25)' : 'none'};
  margin-bottom: ${props => (props.active ? `10px` : '0')};
`

class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      toggleMenu: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ toggleMenu: !this.state.toggleMenu })
  }

  // NavWrapper height should be 364px

  render() {
    return (
      <NavWrapper active={this.state.toggleMenu}>
        <NavBar>
          <MobileMenuWrapper onClick={this.toggle}>
            <MdMenu />
          </MobileMenuWrapper>
          <LogoSection />
          <NavSection />
          <NavSpacing />
        </NavBar>
        <MobileNavSection active={this.state.toggleMenu} />
      </NavWrapper>
    )
  }
}

export default Navigation
