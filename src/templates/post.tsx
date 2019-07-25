import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostWrapper, {
  PostContent,
  PostHeader,
  PostTitle,
  PostFeaturedImage,
  PostHeaderBackground,
} from './Post.style'
import { BlogPostBySlugQuery } from '../../@types/graphql-types'
import Meta from '../components/Meta'
import ShareSideBar from '../components/ShareSideBar'
export interface PostProps {
  data: BlogPostBySlugQuery
  cover: string
  props: any
  location: Location
}
const BlogPostTemplate = (props: PostProps) => {
  const post = props.data.markdownRemark
  const cover = post.frontmatter.cover.childImageSharp.fluid.src
  const title = post.frontmatter.title
  const tags = post.frontmatter.tags
  const date = post.frontmatter.date
  const readingTime = post.fields.readingTime

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ShareSideBar url={props.location} />
      <PostWrapper>
        <PostFeaturedImage src={cover}>
          <PostHeaderBackground>
            <PostHeader>
              <PostTitle>{title}</PostTitle>
              <Meta date={date} readingTime={readingTime} tags={tags} />
            </PostHeader>
          </PostHeaderBackground>
        </PostFeaturedImage>

        <PostContent
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </PostWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { contentType: { eq: "blog" } }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "dddd DD MMMM YYYY")
        description
        contentType
        tags
        cover {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
