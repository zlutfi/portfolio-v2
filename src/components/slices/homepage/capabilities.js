import React, { Component } from "react"
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
} from "mdbreact"
import posed from "react-pose"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

// Styled components for section
const CapabilitiesWrapper = styled.div`
  padding: 3rem 0;
  background-color: rgba(125, 125, 125.125, 0.2);
`
const H1 = styled.h1`
  font-weight: bold;
`
const P = styled.p``

// Animations for cards on hover
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.05)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
  },
})

export default class Capabilities extends Component {
  render() {
    const { input } = this.props
    return (
      <CapabilitiesWrapper>
        <MDBContainer className="py-4 py-md-5 mx-auto text-center">
          <MDBRow>
            <MDBCol size="12" md="8" className="mx-auto">
              <Fade bottom>
                <H1 className="h1-responsive text-center my-5">
                  {input.primary.section_title}
                </H1>
                <P className="lead text-center w-responsive mx-auto mb-5">
                  {input.primary.section_subtitle.text}
                </P>
              </Fade>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-0 text-center mx-auto" key={input.id}>
            {input.items.map((card, index) => (
              <MDBCol size="12" md="6" lg="4" className="mb-4" key={index}>
                <Zoom bottom delay={300 * index}>
                  <div style={{ height: "100%" }}>
                    <Box className="box" style={{ height: "100%" }}>
                      <MDBCard>
                        <MDBCardHeader className="py-2">
                          <MDBIcon
                            icon={card.card_icon}
                            className="mr-3 py-4"
                            size="2x"
                          />
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle className=" py-2">
                            {card.card_title.text}
                          </MDBCardTitle>
                          <hr className="mx-3" />
                          <MDBCardText>
                            {card.card_description.text}
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Box>
                  </div>
                </Zoom>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </CapabilitiesWrapper>
    )
  }
}

Capabilities.propTypes = {
  input: PropTypes.object.isRequired,
}
