import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
