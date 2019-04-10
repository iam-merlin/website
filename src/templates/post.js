import React from "react"
import { graphql } from "gatsby"

import PostContent from "../components/PostContent"
import PostHeader from "../components/PostHeader"
import PostFooter from "../components/PostFooter"
import Layout from "../components/Layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, fields, html } = markdownRemark

  console.log(data)
  return (
    <Layout>
      <PostHeader {...frontmatter} {...fields} />
      <PostContent content={html} />
      <PostFooter {...frontmatter} {...fields} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }, type: { eq: "post" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        tags
      }
      fields {
        readingTime {
          time
        }
      }
    }
  }
`