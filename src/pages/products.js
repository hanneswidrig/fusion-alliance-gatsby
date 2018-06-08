import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Products = () => {
  const postNode = {
    title: `Products - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Products - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="products" customTitle />

      <Container>
        <PageTitle>Products</PageTitle>
      </Container>
    </div>
  )
}

export default Products
