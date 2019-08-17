import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardHeader,
  MDBCardText,
  MDBAnimation,
} from "mdbreact"

export default class CapabilitiesSection extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer fluid className="py-md-5 py-3">
        <MDBRow className="py-2  my-3 my-md-5 justify-content-center">
          <MDBContainer>
            <MDBRow className="py-4 py-md-5 mx-auto justify-content-center">
              <MDBCol size="12">
                <MDBAnimation type="fadeInUp" reveal>
                  <h2 className="text-center font-weight-bold">
                    {input.primary.section_title}
                    <hr className="heading-hr" />
                  </h2>
                </MDBAnimation>
              </MDBCol>
              <MDBCol lg="7" className="text-center mx-auto">
                <MDBAnimation type="fadeInUp" delay="0.3s" reveal>
                  <p className="lead">{input.primary.section_subtitle.text}</p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
            <MDBRow
              className="mb-0  text-center mx-auto justify-content-center"
              key={input.id}
            >
              {input.items.map((card, index) => (
                <MDBCol size="12" md="4" className="mb-3 mb-md-0" key={index}>
                  <MDBAnimation
                    type="fadeIn"
                    delay="0.2s"
                    reveal
                    className="animated-cards"
                  >
                    <MDBCard>
                      <MDBCardHeader>
                        <MDBIcon
                          icon={card.card_icon}
                          className="mr-2 text-primary py-2"
                          size="4x"
                        />
                      </MDBCardHeader>
                      <MDBCardBody>
                        <MDBCardTitle className="font-weight-bold py-2">
                          {card.card_title.text}
                        </MDBCardTitle>

                        <hr className="mx-3" />

                        <MDBCardText className="py-2">
                          {card.card_content.text}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    )
  }
}

CapabilitiesSection.propTypes = {
  input: PropTypes.object.isRequired,
}
