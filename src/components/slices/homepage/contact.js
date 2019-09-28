import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdbreact"
import Fade from "react-reveal/Fade"
import ContactForm from "../../contactForm"

export default class Contact extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer className="py-4 py-md-5 mx-auto text-center">
        <MDBRow>
          <MDBCol size="12" md="8" className="mx-auto">
            <Fade bottom>
              <h2 className="h2-responsive font-weight-bold text-center my-4 section-title">
                {input.primary.contact_title.text}
              </h2>
              <p className="lead grey-text text-center w-responsive mx-auto mb-5">
                {input.primary.contact_subtitle.text}
              </p>
              {/* <div className="pb-5">
                  <MDBIcon fab icon="github" size="2x" className="mr-3" />
                  <MDBIcon fab icon="twitter" size="2x" className="mr-3" />
                  <MDBIcon fab icon="linkedin" size="2x" className="mr-3" />
                </div> */}
            </Fade>
          </MDBCol>
        </MDBRow>

        <MDBRow className="justify-content-center">
          <MDBCol size="12" md="9" className="mx-auto pb-5">
            <Fade bottom>
              <MDBCard>
                <MDBCardHeader className="text-left py-3" tag="h5">
                  <MDBIcon icon="envelope" className="mr-3 text-primary" />{" "}
                  {/* Use the form below to get in touch. */}
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <ContactForm input={input} />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

Contact.propTypes = {
  input: PropTypes.object.isRequired,
}
