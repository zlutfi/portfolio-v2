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
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f7f8fa"
            fill-opacity="1"
            d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <section style={{ backgroundColor: "#f7f8fa" }}>
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
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f7f8fa"
            fill-opacity="1"
            d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </>
    )
  }
}

Contact.propTypes = {
  input: PropTypes.object.isRequired,
}
