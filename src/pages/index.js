import React from 'react'
import Container from '../components/Container'
import SEO from '../components/SEO'
import HeroBanner from '../components/HeroBanner'
import VideoBanner from '../components/VideoBanner'

const Index = () => {
  return (
    <main>
      <SEO />
      <Container>
        <HeroBanner />
        <VideoBanner />
      </Container>
    </main>
  )
}

export default Index
