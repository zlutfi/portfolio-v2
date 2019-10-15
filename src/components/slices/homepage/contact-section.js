import React from "react"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdbreact"
// import Zoom from "react-reveal/Zoom"
import ContactForm from "../../contact-form"
// import ShapeDivider from "../../shape-divider"
import SectionTitle from "../../section-title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = ({ input }) => (
  <>
    {/* <ShapeDivider fill="#f7f8fa" rotateY /> */}
    <section style={{ backgroundColor: "#f7f8fa" }}>
      <MDBContainer className="py-4 py-md-5 mx-auto text-center">
        {/* Section title */}
        <SectionTitle
          title={input.primary.contact_section_title.text}
          subtitle={input.primary.contact_section_subtitle.html}
        />

        <MDBRow className="justify-content-center">
          <MDBCol size="12" md="9" className="mx-auto pb-5">
            {/* <Zoom bottom> */}
            <MDBCard>
              <MDBCardHeader className="text-left py-3" tag="h5">
                {/* Font Awesome Icon */}
                <FontAwesomeIcon
                  icon="envelope"
                  className="text-primary mr-3"
                />
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
            {/* </Zoom> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    {/* Shape divider component */}
    {/* <ShapeDivider fill="#f7f8fa" rotateX /> */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f7f8fa"
            fill-opacity="1"
            d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg> */}
  </>
)

export default Contact

Contact.propTypes = {
  input: PropTypes.object.isRequired,
}
