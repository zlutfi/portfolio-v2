import React from "react"
import { graphql, Link } from "gatsby"
import { PropTypes } from "prop-types"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectHeader from "../components/ProjectHeader"
import SliceZone from "../components/SliceZone"

const Project = ({ data: { prismicProject } } = this.props) => {
  const { data } = prismicProject
  return (
    <Layout>
      <SEO title={data.title} />
      <ProjectHeader
        title={data.title}
        subtitle={data.subtitle}
        background={data.hero.localFile.childImageSharp.fluid}
      />
      <MDBContainer>
        <MDBRow>
          <MDBCol className="py-5">
            <h1>{data.title}</h1>
            <h4>{data.subtitle}</h4>
          </MDBCol>
        </MDBRow>
        <SliceZone allSlices={data.body} />

        <MDBRow>
          <MDBCol className="py-5">
            <Link to="/projects">
              <MDBBtn tag="span" color="primary">
                <MDBIcon icon="caret-left" className="mr-2" />
                Return to Projects
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  data: PropTypes.shape({
    prismicProject: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        hero: PropTypes.object.isRequired,
        body: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      data {
        title
        subtitle
        hero {
          alt
          localFile {
            childImageSharp {
              fluid(cropFocus: CENTER, maxHeight: 600, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          ... on PrismicProjectBodyText {
            id
            slice_type
            primary {
              text {
                html
                text
              }
            }
          }
          ... on PrismicProjectBodyProjectInfo {
            id
            slice_type
            primary {
              project_title
              project_link {
                url
              }
              project_code_link {
                url
              }
            }
          }
          ... on PrismicProjectBodyRightImageLeftText {
            id
            slice_type
            primary {
              right_image_title {
                text
                html
              }
              right_image_paragraph {
                text
                html
              }
              right_image_image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectBodyLeftImageRightText {
            id
            slice_type
            primary {
              left_image_title {
                text
                html
              }
              left_image_paragraph {
                text
                html
              }
              left_image_image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectBodyImageGallery {
            id
            slice_type
            primary {
              gallery_title {
                text
              }
            }
            items {
              gallery_image {
                alt
                copyright
                localFile {
                  childImageSharp {
                    fluid(cropFocus: CENTER, maxWidth: 300, maxHeight: 150) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              image_caption {
                text
              }
            }
          }
        }
      }
    }
  }
`
