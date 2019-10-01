import React from "react"
import { graphql } from "gatsby"
import { PropTypes } from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliceOMatic from "../components/sliceomatic"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ data, pageContext }) => {
  const previous = pageContext.prev
  const next = pageContext.next
  const project = data.prismicProject.data
  // const tags = data.prismicProject.tags
  // const categoryLink = data.prismicProject.data.category.slug
  return (
    <>
      <Layout>
        <SEO title={project.title.text} />
        {/* Project header */}
        <Header
          title={project.title.text}
          subtitle={project.subtitle}
          background={project.hero.localFile.childImageSharp.fluid}
          alt={project.hero.alt}
          bgColor="unique-color-dark"
        />
        {/* Slice component for dynamic project pages */}
        <SliceOMatic allSlices={project.body} />
        {/* PREV NEXT Buttons */}
        <PrevNext previous={previous} next={next} />
      </Layout>
    </>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    prismicProject: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.object.isRequired,
        subtitle: PropTypes.string.isRequired,
        hero: PropTypes.object.isRequired,
        body: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export default Project

// Display page header
const Header = props => (
  <MDBView tag="header">
    <Img fluid={props.background} alt={props.alt} className="kenburns-top" />
    <MDBMask className="flex-center" overlay="black-slight">
      <MDBContainer className="py-3 py-md-5 mt-5 mt-md-4">
        <MDBRow>
          <MDBCol
            size="12"
            md="8"
            className="text-center text-md-left mx-auto mx-md-0"
          ></MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>
)

// Display project navigation buttons
const PrevNext = props => (
  <MDBContainer className="py-5">
    <MDBRow between className="px-5">
      <MDBCol size="auto" className="text-center">
        {props.previous && (
          <AniLink
            cover
            direction="left"
            bg="#0a33ff"
            duration={1}
            to={`${props.previous.url}`}
            className="project-nav"
            style={{ color: "#222", fontWeight: "bold" }}
          >
            <MDBIcon icon="arrow-alt-circle-left" className="mr-3" />
            PREV
          </AniLink>
        )}
      </MDBCol>
      <MDBCol size="auto" className="text-center">
        {props.next && (
          <AniLink
            cover
            direction="right"
            bg="#0a33ff"
            duration={1}
            to={`${props.next.url}`}
            className="project-nav"
            style={{ color: "#222", fontWeight: "bold" }}
          >
            NEXT
            <MDBIcon icon="arrow-alt-circle-right" className="ml-3" />
          </AniLink>
        )}
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      tags
      data {
        title {
          text
          html
        }
        subtitle
        category {
          slug
        }
        hero {
          alt
          localFile {
            childImageSharp {
              fluid(
                cropFocus: CENTER
                maxHeight: 600
                maxWidth: 1200
                quality: 90
              ) {
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
              section_title {
                html
                text
              }
              section_content {
                html
                text
              }
            }
          }
          ... on PrismicProjectBodyProjectInfo {
            id
            slice_type
            items {
              project_technology
            }
            primary {
              project_title
              project_overview {
                html
                text
              }
              project_link {
                url
              }
              project_code_link {
                url
              }
              project_role {
                text
                html
              }
              project_type {
                text
                html
              }
              project_technology_title
              project_features_title
              project_features {
                text
              }
            }
          }
          ... on PrismicProjectBodyDivider {
            id
            slice_type
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
                    fluid(
                      cropFocus: CENTER
                      maxHeight: 500
                      maxWidth: 800
                      quality: 90
                    ) {
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
                    fluid(
                      cropFocus: CENTER
                      maxHeight: 500
                      maxWidth: 800
                      quality: 90
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectBodyImage {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(
                      quality: 90
                      cropFocus: CENTER
                      maxHeight: 600
                      maxWidth: 1200
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectBodyCarousel {
            id
            slice_type
            primary {
              carousel_title {
                html
                text
              }
              active_slide
            }
            items {
              slide_image {
                alt
                localFile {
                  childImageSharp {
                    fluid(
                      cropFocus: CENTER
                      maxHeight: 500
                      maxWidth: 1200
                      quality: 90
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              slide_title {
                html
                text
              }
              slide_caption {
                html
                text
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
                      src
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
    sitePage(context: { uid: { eq: $uid } }) {
      context {
        prev {
          url
        }
        next {
          url
        }
      }
    }
  }
`
