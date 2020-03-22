import React from "react"
import SEO from "../components/shared/seo"
import { graphql } from "gatsby"


const IndexPage = (props) => {
  const { data } = props
  return (
    <>
      <SEO title="Home" description={data.site.siteMetadata.description} />

      <h1>Hello there</h1>
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
