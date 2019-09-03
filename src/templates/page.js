import React from "react"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import PropTypes from "prop-types"
import SliceZone from "../components/SliceZone"

const Page = ({ data }) => {
  const page = data.prismicPage.data
  const homeHero = data.prismicHomepageBodyHero
  return (
    <>
      <Layout>
        <SEO title={page.title} />
        <PageHeader
          title={page.title}
          subtitle={page.subtitle}
          background={
            homeHero.primary.background.localFile.childImageSharp.fluid
          }
        />

        <MDBContainer>
          <SliceZone allSlices={page.body} />
        </MDBContainer>
      </Layout>
    </>
  )
}

export default Page

Page.propTypes = {
  data: PropTypes.shape({
    prismicPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        body: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      data {
        title
        subtitle
        hero {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 1920
                maxHeight: 1080
                quality: 90 # duotone: { #   highlight: "#007bff" #   shadow: "#202932"
              ) #   opacity: 90
              # }
              {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        body {
          ... on PrismicPageBodyText {
            id
            slice_type
            primary {
              text {
                text
                html
              }
            }
          }
          ... on PrismicPageBodyTextWithImage {
            id
            slice_type
            primary {
              content {
                html
                text
              }
              image {
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
          ... on PrismicPageBodyQuote {
            id
            slice_type
            primary {
              name_of_the_author {
                text
              }
              quote {
                text
              }
              portrait_author {
                localFile {
                  childImageSharp {
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
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
  }
`
