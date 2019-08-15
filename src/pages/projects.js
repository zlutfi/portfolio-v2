import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Img from "gatsby-image"
import PageHero from "../components/pageHero"

const Projects = ({ data }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    <PageHero
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
    />
    <MDBContainer>
      <MDBRow>
        {data.allPrismicProject.nodes.map(project => (
          <MDBCol size="12" md="4" key={project.id}>
            <Link to={project.url}>
              <Img
                fluid={project.data.hero.localFile.childImageSharp.fluid}
                alt="alt text bruh"
              />
            </Link>
            <h5>{project.data.title.text}</h5>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default Projects

export const projectsPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "projects" }) {
      uid
      id
      type
      data {
        title
        subtitle
      }
    }
    allPrismicProject {
      nodes {
        id
        type
        url
        data {
          subtitle
          title
          hero {
            localFile {
              childImageSharp {
                fluid(cropFocus: CENTER, maxHeight: 200, maxWidth: 400) {
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
`
