import React from "react"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import SliceZone from "../components/SliceZone"

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  return (
    <Layout>
      <SEO title={data.title.text} />
      <PageHero title={data.title.text} subtitle={data.description.text} />
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <Img
              fluid={data.hero.localFile.childImageSharp.fluid}
              alt={data.hero.alt}
            />
          </MDBCol>
          <MDBCol className="py-5">
            <h1>{data.title.text}</h1>
            <h4>{data.description.text}</h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <SliceZone allSlices={data.body} />
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      type
      uid
      data {
        title {
          text
        }
        description {
          text
        }
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
          ... on PrismicProjectBodyImageGallery {
            id
            slice_type
            primary {
              name_of_the_gallery {
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
              image_captions {
                text
              }
            }
          }
        }
      }
    }
  }
`
