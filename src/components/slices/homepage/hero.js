import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//MDB Hero Components
import {
  MDBJumbotron,
  MDBRow,
  MDBCol,
  // MDBBtn,
  MDBIcon,
  MDBContainer,
} from "mdbreact"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

// Styled components for section
const HeroWrapper = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
`
const HeroContainer = styled.div`
  align-self: center;
  padding-top: 5rem;
`
const H1 = styled.h1`
  color: #ffffff;
`

function Hero({ input }) {
  return (
    <BackgroundImage
      fluid={input.primary.background.localFile.childImageSharp.fluid}
      style={{
        // Defaults are overwrite-able by setting one or each of the following:
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroWrapper id="hero">
        <HeroContainer>
          <MDBJumbotron fluid>
            <MDBContainer>
              <Fade bottom>
                <MDBRow>
                  <MDBCol size="12" className="text-center mx-auto">
                    <H1
                      dangerouslySetInnerHTML={{
                        __html: input.primary.title.html,
                      }}
                    />
                    {/* I'm <Span>Z,</Span> <Span> a Developer </Span> &
                      <Span> Designer. </Span> */}

                    <MDBRow className="mt-5">
                      <MDBCol>
                        <Link
                          to={input.primary.button_1_link.url}
                          alt={input.primary.button_1_title}
                          title={input.primary.button_1_title}
                        >
                          <MDBIcon
                            far
                            icon="arrow-alt-circle-down"
                            className="mr-2"
                            size="3x"
                          />

                          {/* <MDBBtn
                            color="light-green"
                            tag="span"
                            style={{ minWidth: "205px" }}
                            outline
                          >
                            <MDBIcon icon="folder-open" className="mr-2" />
                            {input.primary.button_1_title}
                          </MDBBtn> */}
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </Fade>
            </MDBContainer>
          </MDBJumbotron>
        </HeroContainer>
      </HeroWrapper>
    </BackgroundImage>
  )
}
export default Hero
