import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"

const Projects = ({ data }) => (
  <Layout>
    <SEO title={data.prismicProjects.data.title} />
    <PageHero
      title={data.prismicProjects.data.title}
      subtitle={data.prismicProjects.data.description}
    />
  </Layout>
)

export default Projects

export const projectsPageQuery = graphql`
  query {
    prismicProjects {
      uid
      data {
        title
        description
      }
    }
  }
`
