import Link from 'gatsby-link'
import styled from 'styled-components'
import styledHeaderTheme from '../styles/styledHeaderTheme'

export const MobileMenuButton = styled(Link)`
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
