import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ResetCSS from '../components/resetCSS'
import NotFound from '../containers/NotFound'

const Homepage = () => {
  return (
    <Layout>
      <ResetCSS />
      <SEO title="404: Not Found" description="This page does not exist" />
      <NotFound />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
