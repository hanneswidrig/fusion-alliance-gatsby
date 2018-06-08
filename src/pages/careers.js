import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Careers = () => {
  const postNode = {
    title: `Careers`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Careers`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Careers" customTitle />

      <Container>
        <PageTitle>Careers</PageTitle>
      </Container>
    </div>
  )
}

export default Careers
