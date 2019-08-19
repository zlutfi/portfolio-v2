import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
} from "mdbreact"
import BackgroundImage from "gatsby-background-image"
import ContactForm from "../../ContactForm"
export default class ContactSection extends Component {
  render() {
    const { input } = this.props
    return (
      // <BackgroundImage
      //   fluid={input.primary.contact_background.localFile.childImageSharp.fluid}
      // >
      <MDBContainer>
        <MDBRow size="12" className="py-5 text-center">
          <MDBCol size="12">
            <h1 className="font-weight-bold">
              {input.primary.contact_title.text}
            </h1>
            <hr className="heading-hr" />
          </MDBCol>
          <MDBCol size="6" className="mx-auto">
            {/* <h5>{input.primary.contact_subtitle.text}</h5> */}
            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: input.primary.contact_subtitle.html,
              }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5 justify-content-center">
          <MDBCol size="12" md="10" className="mx-auto">
            <MDBAnimation type="fadeIn" delay="0.3s" reveal>
              <MDBCard>
                <MDBCardBody>
                  <ContactForm />
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      // </BackgroundImage>
    )
  }
}

ContactSection.propTypes = {
  input: PropTypes.object.isRequired,
}
