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
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"

function Hero({ input }) {
  return (
    <>
      {/* <BackgroundImage
        fluid={input.primary.background.localFile.childImageSharp.fluid}
        style={{
          // Defaults are overwrite-able by setting one or each of the following:
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      > */}
      <MDBJumbotron fluid className="my-5" id="home">
        <MDBContainer>
          <MDBRow className="my-5 py-5">
            <MDBCol size="12" className="mx-auto my-5 py-5 text-center">
              <Fade delay={400}>
                <h1
                  style={{ color: "#222" }}
                  className="h1-responsive text-uppercase font-weight-bold"
                >
                  Web Developer & Designer
                </h1>
                <h2 className="grey-text h2-responsive">
                  I build lightning fast responsive websites and apps
                </h2>
              </Fade>

              <MDBRow className="mt-md-5">
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
