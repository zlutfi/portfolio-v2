import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
// import Fade from "react-reveal/Fade"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBBtn,
} from "mdbreact"
import SectionTitle from "../../section-title"

export default class Capabilities extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <MDBContainer
          className="py-4 py-md-5 mx-auto text-center"
          tag="section"
        >
          {/* Section title */}
          <SectionTitle
            title={input.primary.section_title}
            subtitle={input.primary.section_subtitle.html}
          />
          {/* Main image */}
          <MDBRow>
            <MDBCol size="12" md="6" middle>
              {/* Fade in this image on reveal */}
              {/* <Fade delay={400}> */}
              <Img
                fluid={
                  input.primary.section_image.localFile.childImageSharp.fluid
                }
                alt={input.primary.section_image.alt}
                style={{ boxShadow: "none" }}
              />
              {/* </Fade> */}
            </MDBCol>
            {/* Capabilities cards */}
            <MDBCol size="11" md="6" className="mx-auto">
              <MDBRow>
                {/* Map these sections dynamically */}
                {input.items.map((card, index) => (
                  <MDBCol
                    size="12"
                    className="text-center text-md-left py-3"
                    key={index}
                    tag="article"
                  >
                    {/* Fade in this component on reveal */}
                    {/* <Fade bottom delay={400}> */}
                    <MDBCard>
                      <MDBCardHeader className="font-weight-bold" tag="h5">
                        {/* Header icon */}
                        <MDBIcon
                          icon={card.card_icon}
                          className="mr-3 text-primary"
                        />
                        {/* Header title */}
                        {card.card_title.text}
                      </MDBCardHeader>
                      <MDBCardBody>
                        {/* Fade in this text on reveal */}
                        {/* <Fade delay={600}> */}
                        <MDBCardText>{card.card_description.text}</MDBCardText>
                        {/* </Fade> */}
                      </MDBCardBody>
                    </MDBCard>
                    {/* </Fade> */}
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBCol>
          </MDBRow>
          {/* CTA Section */}
          <MDBRow className="py-5 justify-content-center">
            <Link to="/about" title="View Projects">
              <MDBBtn color="elegant" tag="span" className="btn-rounded">
                <MDBIcon icon="folder-open" className="mr-2" />
                Learn more
              </MDBBtn>
            </Link>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

Capabilities.propTypes = {
  input: PropTypes.object.isRequired,
}
