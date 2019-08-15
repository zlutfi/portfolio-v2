import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"

const Blog = ({ data }) => (
  <Layout>
    <SEO title={data.prismicBlog.data.title} />
    <PageHero
      title={data.prismicBlog.data.title}
      subtitle={data.prismicBlog.data.description}
    />
  </Layout>
)

export default Blog

export const blogPageQuery = graphql`
  query {
    prismicBlog {
      uid
      data {
        title
        description
      }
    }
  }
`
