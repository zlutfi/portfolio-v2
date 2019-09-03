import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDBContainer } from "mdbreact"
import PropTypes from "prop-types"
import PageHeader from "../components/PageHeader"
import Layout from "../components/layout"
import ProjectsNav from "../components/projects/ProjectsNav"
import ProjectCards from "../components/projects/ProjectCards"

const Projects = ({ data = this.props }) => (
  <>
    <Layout>
      <SEO title={data.prismicStaticPage.data.title} />

      <PageHeader
        title={data.prismicStaticPage.data.title}
        subtitle={data.prismicStaticPage.data.subtitle}
        background={
          data.prismicHomepageBodyHero.primary.background.localFile
            .childImageSharp.fluid
        }
      />

      <MDBContainer>
        <ProjectsNav input={data.allPrismicCategory.edges} />
        <ProjectCards input={data.allPrismicProject.edges} />
      </MDBContainer>
    </Layout>
  </>
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
      node: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const projectsPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "projects" }) {
      data {
        title
        subtitle
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
            category {
              slug
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
              localFile {
                childImageSharp {
                  fluid(cropFocus: CENTER, maxHeight: 450, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            category {
              slug
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
                  text {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicHomepageBodyHero {
      primary {
        background {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 1920
                maxHeight: 1080
                quality: 90
                duotone: {
                  highlight: "#007bff"
                  shadow: "#15224a"
                  opacity: 90
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    allPrismicCategory(sort: { fields: data___title }) {
      edges {
        node {
          uid
          data {
            title
          }
          url
        }
      }
    }
  }
`
