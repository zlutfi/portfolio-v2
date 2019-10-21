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
import ContactForm from "../../contact-form"
// import ShapeDivider from "../../shape-divider"
import SectionTitle from "../../section-title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = ({ input }) => (
  <>
    {/* <ShapeDivider fill="#eee" fill2="#f7f8fa" rotateX /> */}

    <section style={{ backgroundColor: "#f7f8fa" }}>
      <MDBContainer className="py-4 py-md-5 mx-auto text-center">
        {/* Section title */}
        <SectionTitle
          title={input.primary.contact_section_title.text}
          subtitle={input.primary.contact_section_subtitle.html}
        />

        <MDBRow className="justify-content-center">
          <MDBCol size="12" md="9" className="mx-auto pb-5">
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  </>
)

export default Contact

Contact.propTypes = {
  input: PropTypes.object.isRequired,
}
