import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const About = () => {
  const postNode = {
    title: `About - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="about" customTitle />

      <Container>
        <PageTitle>About</PageTitle>
      </Container>
    </div>
  )
}

export default About
