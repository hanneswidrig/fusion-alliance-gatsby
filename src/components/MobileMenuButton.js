// import MobileNavSection from './MobileNavSection'

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MdMenu from 'react-icons/lib/md/menu'
import styledHeaderTheme from '../styles/styledHeaderTheme'

export const MobileMenuWrapper = styled(Link)`
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

class MobileMenuButton extends React.Component {
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

  render() {
    return (
      <div>
        <MobileMenuWrapper to="" onClick={this.toggle}>
          <MdMenu />
        </MobileMenuWrapper>
        {/* <MobileNavSection /> */}
      </div>
    )
  }
}

export default MobileMenuButton
