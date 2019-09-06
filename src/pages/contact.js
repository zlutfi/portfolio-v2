import React from "react"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import PropTypes from "prop-types"
import ContactForm from "../components/contactForm"

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
        <ContactForm input={data.prismicHomepageBodyContactCta} />
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
