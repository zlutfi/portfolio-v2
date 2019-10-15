import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBView,
  MDBMask,
} from "mdbreact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Title from "../../title"

const Hero = ({ input }) => {
  return (
    <>
      <MDBView>
        <Img
          fluid={input.primary.background.localFile.childImageSharp.fluid}
          alt={input.primary.background.alt}
          style={{ minHeight: "35rem" }}
        />
        <MDBMask className="flex-center">
          <MDBContainer className="py-3 py-md-5 mt-5 mt-md-4">
            <MDBRow>
              <MDBCol
                size="12"
                md="8"
                className="text-center text-md-left mx-auto mx-md-0"
              >
                <h1 className=" font-weight-bold h1-responsive text-uppercase">
                  I build lightning fast <br />
                  websites and apps.
                </h1>
                <p className=" my-3 lead">
                  Continue to see some of my recent projects and skills.
                </p>
                {/* <Title
                  title={input.primary.title.text}
                  subtitle={input.primary.subtitle}
                /> */}
                <Link
                  to={input.primary.button_1_link.url}
                  alt={input.primary.button_1_title}
                  title={input.primary.button_1_title}
                >
                  <MDBBtn
                    color="primary"
                    tag="span"
                    className="btn-rounded my-4"
                  >
                    <span className="text-white">
                      {/* Font Awesome icon */}
                      <FontAwesomeIcon
                        icon="folder-open"
                        className="text-white mr-3"
                      />
                      {input.primary.button_1_title} &#8594;
                    </span>
                  </MDBBtn>
                  {/* <MDBBtn color="elegant" tag="span" className="btn-rounded">
                    <span className="text-white">
                      <MDBIcon icon="folder-open" className="mr-2" />
                      About Me &#8594;
                    </span>
                  </MDBBtn> */}
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </>
  )
}
export default Hero
