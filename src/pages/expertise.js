import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Expertise = () => {
  const postNode = {
    title: `Expertise - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Expertise - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="expertise" customTitle />

      <Container>
        <PageTitle>Expertise</PageTitle>
      </Container>
    </div>
  )
}

export default Expertise
