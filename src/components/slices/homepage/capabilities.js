import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  // MDBCardTitle,
  MDBCardHeader,
  MDBCardText,
} from "mdbreact"
import styled from "styled-components"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

// Styled components for section
const CapabilitiesWrapper = styled.div`
  // padding: 3rem 0;
  // background-color: #f8f9f9;
  // background-color: #dfe9f3;
  // background-color: rgba(125, 125, 125.125, 0.2);
  // background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  // background-color: #f8f9f9;
`
// const H1 = styled.h1`
//   font-weight: bold;
// `
// const P = styled.p``

export default class Capabilities extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <CapabilitiesWrapper>
          <MDBContainer className="py-4 py-md-5 mx-auto text-center">
            <MDBRow>
              <MDBCol size="12" md="8" className="mx-auto">
                <Fade bottom>
                  <h2 className="h2-responsive font-weight-bold text-center my-5">
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
                      input.primary.section_image.localFile.childImageSharp
                        .fluid
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
                    >
                      <Fade bottom>
                        <MDBCard
                          style={{
                            boxShadow: "0 16px 48px rgba(32,41,50,.12)",
                          }}
                        >
                          <MDBCardHeader className="font-weight-bold" tag="h5">
                            <MDBIcon
                              icon={card.card_icon}
                              className="mr-3 text-primary"
                            />
                            {card.card_title.text}
                          </MDBCardHeader>
                          <MDBCardBody>
                            <Fade bottom>
                              {/* <h4 className="font-weight-bold text-center text-md-left pb-3">
                                <MDBIcon
                                  icon={card.card_icon}
                                  className="mr-3 blue-text"
                                />
                                {card.card_title.text}
                              </h4> */}
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
            {/* <MDBRow className="mb-0 text-center mx-auto" key={input.id}>
              {input.items.map((card, index) => (
                <MDBCol size="12" md="6" lg="4" className="mb-4" key={index}>
                  <Zoom bottom delay={300 * index}>
                    <div style={{ height: "100%" }}>
                      <Box className="box" style={{ height: "100%" }}>
                        <MDBCard>
                          <MDBCardHeader
                            tag="h3"
                            className="white-text font-weight-bold"
                          >
                            <MDBIcon
                              icon={card.card_icon}
                              className="mr-3 pb-0 pt-4 text-white"
                              // size="3x"
                            />
                            {card.card_title.text}
                          </MDBCardHeader>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                          >
                            <path
                              fill="#007bff"
                              fill-opacity="1"
                              d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,154.7C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                            ></path>
                          </svg>
                          <MDBCardBody>
                            <MDBCardTitle className="py-2">
                              <MDBIcon
                                icon={card.card_icon}
                                className="mr-3 py-4 blue-text"
                              />
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
            </MDBRow> */}
          </MDBContainer>
        </CapabilitiesWrapper>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#007bff"
            fill-opacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,154.7C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
      </>
    )
  }
}

Capabilities.propTypes = {
  input: PropTypes.object.isRequired,
}
