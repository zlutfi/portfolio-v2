import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  return (
    <Layout>
      <SEO title={data.title.text} />
      <h1>{data.title.text}</h1>
      <h4>{data.description.text}</h4>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      type
      uid
      data {
        title {
          text
        }
        description {
          text
        }
      }
    }
  }
`
