import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardFooter,
  MDBIcon,
  MDBBadge,
} from "mdbreact"
import Img from "gatsby-image"
import PageHeader from "../components/PageHeader"

const Projects = ({ data }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    <PageHeader
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
    />
    <MDBContainer>
      <MDBRow>
        {data.allPrismicProject.nodes.map(project => (
          <MDBCol md="12" className="mb-5">
            <Link to={project.url}>
              <MDBCard>
                <MDBRow>
                  <MDBCol size="12" md="7" className="order-md-last">
                    <Img
                      fluid={
                        project.data.thumbnail.localFile.childImageSharp.fluid
                      }
                      alt="alt text bruh"
                    />
                  </MDBCol>
                  <MDBCol size="12" md="5" middle>
                    <MDBCardBody>
                      <MDBCardText tag="h4">Category</MDBCardText>

                      <MDBCardTitle tag="h4">{project.data.title}</MDBCardTitle>
                      <MDBCardText>{project.data.title}</MDBCardText>
                      <MDBCardText className="font-weight-bold">
                        Read More{" "}
                        <MDBIcon icon="caret-right" className="ml-2" />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
                <MDBCardFooter>Category</MDBCardFooter>
              </MDBCard>
            </Link>
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
                fluid(cropFocus: CENTER, maxHeight: 300, maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          thumbnail {
            localFile {
              childImageSharp {
                fluid(cropFocus: CENTER, maxHeight: 300, maxWidth: 600) {
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
