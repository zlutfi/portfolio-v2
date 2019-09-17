import React from "react"
import { Link } from "gatsby"
// import BackgroundImage from "gatsby-background-image"
//MDB Hero Components
import {
  MDBJumbotron,
  MDBRow,
  MDBCol,
  // MDBBtn,
  MDBIcon,
  MDBContainer,
} from "mdbreact"
// import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"

// // Styled components for section
// const H1 = styled.h1`
//   color: #ffffff;
//   padding-top: 5rem;
// `

function Hero({ input }) {
  return (
    <>
      {/* // <BackgroundImage
    //   fluid={input.primary.background.localFile.childImageSharp.fluid}
    //   style={{
    //     // Defaults are overwrite-able by setting one or each of the following:
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // > */}

      <MDBJumbotron fluid className="my-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12" className="mx-auto my-5 text-center">
              {/* <H1> */}
              {/* <Fade>
                <div className="pt-5 mt-5">
                  <Headline />
                </div>
              </Fade> */}
              {/* <Headline /> */}
              <Fade delay={400}>
                <h1
                  style={{ color: "#222" }}
                  className="h1-responsive text-uppercase font-weight-bold"
                >
                  {/* <span style={{ color: "#007bff", fontWeight: "bold" }}>
                      Web
                    </span>{" "} */}
                  Developer
                </h1>
                <h1
                  style={{ color: "#222" }}
                  className="h1-responsive text-uppercase font-weight-bold"
                >
                  <span style={{ color: "#007bff", fontWeight: "bold" }}>
                    &
                  </span>{" "}
                  Designer
                </h1>
                <h2 className="grey-text">I responsive websites and apps</h2>
              </Fade>
              {/* </H1> */}

              {/* I'm <Span>Z,</Span> <Span> a Developer </Span> &
                      <Span> Designer. </Span> */}

              <MDBRow className="mt-md-5 mt-0">
                <MDBCol>
                  <Fade bottom delay={800}>
                    <Pulse count={5} duration={2000}>
                      <Link
                        to={input.primary.button_1_link.url}
                        alt={input.primary.button_1_title}
                        title={input.primary.button_1_title}
                      >
                        <MDBIcon
                          far
                          icon="arrow-alt-circle-down"
                          className="mr-2 primary-text"
                          size="3x"
                        />

                        {/* <MDBBtn color="primary" tag="span">
                        <MDBIcon icon="folder-open" className="mr-2" />
                        {input.primary.button_1_title}
                      </MDBBtn> */}
                      </Link>
                    </Pulse>
                  </Fade>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
      {/* </BackgroundImage> */}
    </>
  )
}
export default Hero
