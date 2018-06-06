import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
