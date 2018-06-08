import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Careers = () => {
  const postNode = {
    title: `Careers - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Careers - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="careers" customTitle />

      <Container>
        <PageTitle>Careers</PageTitle>
      </Container>
    </div>
  )
}

export default Careers
