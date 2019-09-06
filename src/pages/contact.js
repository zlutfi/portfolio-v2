import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withiepolyfill"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Form from "../components/form"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

const Contact = ({ data = this.props }) => (
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
        <MDBRow>
          <MDBCol>
            <p>{data.prismicStaticPage.data.subtitle}</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="px-0">
          <MDBCol size="12" md="7" className="mx-auto">
            <Fade>
              <Form />
            </Fade>
          </MDBCol>
          <MDBCol middle>
            <Img
              fluid={
                data.prismicHomepageBodyContactCta.primary.contact_image
                  .localFile.childImageSharp.fluid
              }
              alt={data.prismicHomepageBodyContactCta.primary.contact_image.alt}
              className="rounded py-3"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  </>
)

export default Contact

Contact.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const contactPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "contact" }) {
      data {
        title
        subtitle
      }
    }
    prismicHomepageBodyContactCta {
      primary {
        contact_image {
          alt
          localFile {
            childImageSharp {
              fluid(
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
