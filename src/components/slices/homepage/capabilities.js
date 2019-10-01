import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withiepolyfill"
import Fade from "react-reveal/Fade"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
} from "mdbreact"

export default class Capabilities extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <MDBContainer
          className="py-4 py-md-5 mx-auto text-center"
          tag="section"
        >
          <MDBRow>
            <MDBCol size="12" md="8" className="mx-auto">
              <Fade bottom>
                <h2 className="h2-responsive font-weight-bold text-center my-4 section-title">
                  {input.primary.section_title}
                </h2>
                <p className="lead grey-text text-center w-responsive mx-auto mb-5">
                  {input.primary.section_subtitle.text}
                </p>
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" md="6" middle>
              <Fade bottom>
                <Img
                  fluid={
                    input.primary.section_image.localFile.childImageSharp.fluid
                  }
                  alt={input.primary.section_image.alt}
                  style={{ boxShadow: "none" }}
                />
              </Fade>
            </MDBCol>
            <MDBCol size="11" md="6" className="mx-auto">
              <MDBRow>
                {input.items.map((card, index) => (
                  <MDBCol
                    size="12"
                    className="text-center text-md-left py-3"
                    key={index}
                    tag="article"
                  >
                    <Fade bottom>
                      <MDBCard>
                        <MDBCardHeader className="font-weight-bold" tag="h5">
                          <MDBIcon
                            icon={card.card_icon}
                            className="mr-3 text-primary"
                          />
                          {card.card_title.text}
                        </MDBCardHeader>
                        <MDBCardBody>
                          <Fade bottom>
                            <MDBCardText>
                              {card.card_description.text}
                            </MDBCardText>
                          </Fade>
                        </MDBCardBody>
                      </MDBCard>
                    </Fade>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

Capabilities.propTypes = {
  input: PropTypes.object.isRequired,
}
