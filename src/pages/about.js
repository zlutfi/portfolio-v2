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
// import Fade from "react-reveal/Fade"

const About = ({ data }) => {
  const page = data.prismicStaticPage.data
  return (
    <Layout>
      <SEO title={page.title} />
      <Header title={page.title} subtitle={page.subtitle} />
      <MDBContainer className="pb-5 pt-5">
        <MDBRow className="justify-content-center">
          <MDBCol size="12" className="mx-auto pb-5">
            <MDBRow>
              {/* Main content */}
              <MDBCol>
                {/* {page.content.text} */}
                {/* <div
                      dangerouslySetInnerHTML={{
                        __html: page.primary.content.html,
                      }}
                    /> */}
              </MDBCol>
              <MDBCol md="6" className="d-none d-lg-block pr-md-4" middle>
                <img
                  src="https://placehold.it/600x600"
                  alt="Something here"
                  className="rounded py-3 img-fluid"
                  style={{ boxShadow: "none" }}
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default About

About.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        content: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
}

export const aboutPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "about" }) {
      data {
        title
        subtitle
      }
    }
  }
`
