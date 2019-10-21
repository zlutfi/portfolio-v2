import React from "react"
import { graphql } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBJumbotron,
  // MDBCard,
  // MDBCardBody,
  // MDBCardHeader,
  // MDBIcon,
} from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import PropTypes from "prop-types"
// import Title from "../components/title"
// import Fade from "react-reveal/Fade"

// import posed from "react-pose"

// const Animate = posed.div({
//   enter: {
//     opacity: 1,
//     y: 0,
//   },
//   exit: {
//     opacity: 0,
//     // duration: 200,
//     y: 100,
//   },
// })

const About = ({ data }) => {
  const page = data.prismicStaticPage.data
  return (
    <Layout>
      <SEO title={page.title} />
      {/* Test Header */}
      {/* <MDBJumbotron className="grey lighten-3" style={{ minHeight: "20rem" }}>
        <MDBContainer style={{ minHeight: "inherit" }}>
          <MDBRow middle>
            <MDBCol size="12" middle className="text-center text-md-left">
              <Title title={page.title} subtitle={page.subtitle} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron> */}

      <Header
        title={page.title}
        subtitle={page.subtitle}
        background={page.background.localFile.childImageSharp.fluid}
      />
      {/* <Animate> */}
      <MDBContainer className="pb-5 pt-5">
        <MDBRow className="justify-content-center">
          <MDBCol size="12" className="mx-auto pb-5">
            <MDBRow>
              {/* Main content */}
              <MDBCol>
                {/* {page.content.text} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: page.content.html,
                  }}
                />
              </MDBCol>
              <MDBCol md="5" className="d-none d-lg-block pr-md-4" middle>
                <img
                  src="https://placehold.it/600x400"
                  alt="Something here"
                  className="rounded py-3 img-fluid"
                  style={{ boxShadow: "none" }}
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* </Animate> */}
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
          html: PropTypes.string.isRequired,
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
        content {
          html
        }
        background {
          alt
          localFile {
            childImageSharp {
              fluid(
                quality: 90
                duotone: {
                  highlight: "#15224a"
                  shadow: "#000000"
                  opacity: 80
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
