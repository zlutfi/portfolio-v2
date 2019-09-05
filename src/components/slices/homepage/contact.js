import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBAnimation,
  MDBCard,
  MDBCardBody,
} from "mdbreact"
import Img from "gatsby-image"
// import BackgroundImage from "gatsby-background-image"
import Form from "../../form"
// import GoogleApiWrapper from "../../map"

import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

// Styled components for section

const ContactWrapper = styled.div`
  padding: 3rem 0;
`

// const ContactTitle = styled.h1`
//   color: #ffffff;
// `

// const ContactHR = styled.hr`
//   max-width: 200px;
//   border-top: 1px solid rgba(255, 255, 255, 0.2);
// `

// const ContactSubtitle = styled.p`
//   color: #fff;
// `

export default class Contact extends Component {
  render() {
    const { input } = this.props
    return (
      // <BackgroundImage
      //   fluid={input.primary.contact_background.localFile.childImageSharp.fluid}
      // >
      <ContactWrapper>
        <MDBContainer className="py-4 py-md-5 mx-auto text-center">
          <MDBRow>
            <MDBCol size="12" md="8" className="mx-auto">
              <Fade bottom>
                <h1 className="h1-responsive font-weight-bold text-center my-5">
                  {input.primary.contact_title.text}
                </h1>
                <p className="lead text-center w-responsive mx-auto mb-5">
                  {input.primary.contact_subtitle.text}
                </p>
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol size="12" className="mx-auto">
              <Zoom bottom>
                <MDBCard>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol>
                        <Form />
                      </MDBCol>
                      <MDBCol
                        md="6"
                        className="d-none d-lg-block pr-md-4"
                        middle
                      >
                        <Img
                          fluid={
                            input.primary.contact_image.localFile
                              .childImageSharp.fluid
                          }
                          alt={input.primary.contact_image.alt}
                          className="rounded py-3"
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </Zoom>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </ContactWrapper>
      // </BackgroundImage>
    )
  }
}

Contact.propTypes = {
  input: PropTypes.object.isRequired,
}
