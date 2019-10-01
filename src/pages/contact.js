import React from "react"
import { graphql } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
} from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import PropTypes from "prop-types"
import ContactForm from "../components/contactForm"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

const Contact = ({ data }) => (
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
      <MDBContainer className="pb-5">
        <MDBRow className="pt-5">
          <MDBCol>
            {/* <p>{data.prismicStaticPage.data.subtitle}</p> */}
            {/* <div className="pb-5">
              <MDBIcon fab icon="github" size="2x" className="mr-3" />
              <MDBIcon fab icon="twitter" size="2x" className="mr-3" />
              <MDBIcon fab icon="linkedin" size="2x" className="mr-3" />
            </div> */}
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol size="12" className="mx-auto pb-5">
            <Fade>
              <MDBCard>
                <MDBCardHeader className="text-left py-3" tag="h5">
                  <MDBIcon icon="envelope" className="mr-3 text-primary" />
                  {/* Use the form below to get in touch. */}
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <ContactForm input={data.prismicHomepageBodyContactCta} />
                    </MDBCol>
                    <MDBCol md="6" className="d-none d-lg-block pr-md-4" middle>
                      <Img
                        fluid={
                          data.prismicHomepageBodyContactCta.primary
                            .contact_image.localFile.childImageSharp.fluid
                        }
                        alt={
                          data.prismicHomepageBodyContactCta.primary
                            .contact_image.alt
                        }
                        className="rounded py-3"
                        style={{ boxShadow: "none" }}
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </Fade>
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
              fluid {
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
                maxHeight: 600
                quality: 90
                duotone: {
                  highlight: "#0a33ff"
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
  }
`
