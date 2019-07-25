import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PostList = (props: any) => {
  const { data } = props
  const Posts = data.allMarkdownRemark.edges
  const { currentPage } = props.pageContext // addnumpage

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />
      {Posts.map(({ node }: any) => {
        return <h1 key={node.frontmatter.title}> post </h1>
      })}
    </Layout>
  )
}

export default PostList

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            description
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1170, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
