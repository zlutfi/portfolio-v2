import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDBContainer } from "mdbreact"
import PropTypes from "prop-types"
import Header from "../components/header"
import Layout from "../components/layout"
import Filter from "../components/project/filter"
import Cards from "../components/project/cards"

const Projects = ({ data }) => (
  <>
    <Layout>
      <SEO title={data.prismicStaticPage.data.title} />

      <Header
        title={data.prismicStaticPage.data.title}
        subtitle={data.prismicStaticPage.data.subtitle}
        background={
          data.prismicHomepageBodyHero.primary.background.localFile
            .childImageSharp.fluid
        }
      />

      <MDBContainer>
        {/* <Filter input={data.allPrismicCategory.edges} /> */}
        <Cards input={data.allPrismicProject.edges} />
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
      edges: PropTypes.array.isRequired,
    }),
    allPrismicCategory: PropTypes.shape({
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
              alt
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
                  highlight: "#1c4e96"
                  shadow: "#15224a"
                  opacity: 100
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
