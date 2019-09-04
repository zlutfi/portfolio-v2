import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import ContactForm from "../components/contactForm"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

const Contact = ({ data = this.props }) => (
  <>
    <Layout>
      <SEO title={data.prismicStaticPage.data.title} />
      <PageHeader
        title={data.prismicStaticPage.data.title}
        subtitle={data.prismicStaticPage.data.subtitle}
        background={
          data.prismicHomepageBodyHero.primary.background.localFile
            .childImageSharp.fluid
        }
      />
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12" md="7" className="mx-auto">
            {data.prismicStaticPage.data.subtitle}
            <Fade>
              <ContactForm />
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
