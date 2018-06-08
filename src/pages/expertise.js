import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Expertise = () => {
  const postNode = {
    title: `Expertise`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Expertise`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="expertise" customTitle />

      <Container>
        <PageTitle>Expertise</PageTitle>
      </Container>
    </div>
  )
}

export default Expertise
