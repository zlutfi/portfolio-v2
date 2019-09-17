import React from "react"
import { graphql } from "gatsby"
import { PropTypes } from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/project/header"
import SliceOMatic from "../components/sliceomatic"
import PrevNext from "../components/project/prevNext"
// import Breadcrumbs from "../components/breadcrumbs"

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
        <Header
          title={project.title.text}
          subtitle={project.subtitle}
          background={project.hero.localFile.childImageSharp.fluid}
          bgColor="unique-color-dark"
        />
        {/* <Breadcrumbs
          title={project.title.text}
          category={tags}
          categoryLink={categoryLink}
        /> */}
        <SliceOMatic allSlices={project.body} />
        <PrevNext previous={previous} next={next} />
      </Layout>
    </>
  )
}

export default Project

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
