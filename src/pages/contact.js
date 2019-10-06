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
import ContactForm from "../components/contact-form"
import Zoom from "react-reveal/Zoom"

const Contact = ({ data }) => {
  const page = data.prismicStaticPage.data
  return (
    <Layout>
      <SEO title={page.title} />
      {/* Page header */}
      <Header title={page.title} subtitle={page.subtitle} />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
          <MDBCol size="12" className="mx-auto pb-5">
            <Zoom>
              <MDBCard>
                <MDBCardHeader className="text-left py-3" tag="h5">
                  <MDBIcon icon="envelope" className="mr-3 text-primary" />
                  {/* Use the form below to get in touch. */}
                </MDBCardHeader>
                {/* Main contact body */}
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      {/* Contact form */}
                      <ContactForm input={data.prismicHomepageBodyContact} />
                    </MDBCol>
                    <MDBCol md="6" className="d-none d-lg-block pr-md-4" middle>
                      {/* Contact body map */}
                      <img
                        src="https://placehold.it/600x600"
                        alt="Map goes here"
                        className="rounded py-3 img-fluid"
                        style={{ boxShadow: "none" }}
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </Zoom>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

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
  }
`
