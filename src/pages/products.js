import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Products = () => {
  const postNode = {
    title: `Products`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Products`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Products" customTitle />

      <Container>
        <PageTitle>Products</PageTitle>
      </Container>
    </div>
  )
}

export default Products
