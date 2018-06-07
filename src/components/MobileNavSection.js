import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'

const NSection = styled.section``

const NavSection = props => (
  <NSection>
    <Link
      to="/expertise/"
      activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
    >
      EXPERTISE
    </Link>
    <Link
      to="/products/"
      activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
    >
      PRODUCTS
    </Link>
    <Link
      to="/about/"
      activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
    >
      ABOUT
    </Link>
    <Link
      to="/contact/"
      activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
    >
      CONTACT
    </Link>
    <Link
      to="/careers/"
      activeStyle={{ color: styledHeaderTheme.colors.activeLinkStyle }}
    >
      CAREERS
    </Link>
  </NSection>
)

export default NavSection
