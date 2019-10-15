import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Header from "../components/header"
import Layout from "../components/layout"
// import Filter from "../components/project/filter"
import Cards from "../components/project/cards"

const Projects = ({ data }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    {/* Project header */}
    <Header
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
      background={
        data.prismicStaticPage.data.background.localFile.childImageSharp.fluid
      }
    />
    {/* Project card component */}
    <Cards input={data.allPrismicProject.edges} />
  </Layout>
)

export default Projects

Projects.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
    }),
    allPrismicProject: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const projectsPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "projects" }) {
      data {
        title
        subtitle
        background {
          alt
          localFile {
            childImageSharp {
              fluid(
                quality: 90
                duotone: {
                  highlight: "#15224a"
                  shadow: "#000000"
                  opacity: 80
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    allPrismicProject {
      edges {
        node {
          id
          type
          url
          tags
          data {
            subtitle
            title {
              html
              text
            }
            hero {
              localFile {
                childImageSharp {
                  fluid(cropFocus: CENTER, maxHeight: 300, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            thumbnail {
              alt
              localFile {
                childImageSharp {
                  fluid(cropFocus: CENTER, maxHeight: 350, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            body {
              ... on PrismicProjectBodyImageGallery {
                id
                slice_type
                items {
                  gallery_image {
                    localFile {
                      childImageSharp {
                        fixed(height: 300, width: 300) {
                          ...GatsbyImageSharpFixed_withWebp
                        }
                      }
                    }
                    alt
                  }
                  image_caption {
                    text
                  }
                }
              }
              ... on PrismicProjectBodyProjectInfo {
                id
                slice_type
                primary {
                  project_link {
                    url
                    type
                    link_type
                  }
                  project_code_link {
                    url
                    type
                    link_type
                  }
                }
              }
              ... on PrismicProjectBodyText {
                id
                slice_type
                primary {
                  section_title {
                    html
                  }
                  section_content {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
