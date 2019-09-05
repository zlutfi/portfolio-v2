import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//MDB Hero Components
import {
  MDBJumbotron,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBContainer,
} from "mdbreact"
import posed from "react-pose"
import SplitText from "react-pose-text"
import styled from "styled-components"

// Styled components for section
const HeroWrapper = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
`
const HeroContainer = styled.div`
  align-self: center;
  padding-top: 5rem;
`
const H1 = styled.h1`
  color: #ffffff;
  font-size: 5vh;
  font-weight: bold;
  text-transform: uppercase;
`
const H2 = styled.h2`
  color: #eee;
  font-weight: bold;
`

// Lets add some animation
const Box = posed.div({
  exit: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 50,
    delay: 100,
  },
})

const charPoses = {
  exit: { opacity: 0, color: "#007bff" },
  enter: { opacity: 1, color: "#ffffff" },
}

function Hero({ input }) {
  return (
    <BackgroundImage
      fluid={input.primary.background.localFile.childImageSharp.fluid}
      style={{
        // Defaults are overwrite-able by setting one or each of the following:
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <HeroWrapper id="hero">
        <HeroContainer>
          <MDBJumbotron fluid>
            <MDBContainer>
              <MDBRow>
                <MDBCol size="12" className="text-center mx-auto">
                  <Box pose="enter" initialPose="exit">
                    <H1>
                      <SplitText charPoses={charPoses}>
                        Developer & Designer
                      </SplitText>
                    </H1>

                    <H2 className="lead py-4">
                      <SplitText charPoses={charPoses}>
                        I Build Lightning Fast Websites with React.
                      </SplitText>
                    </H2>
                  </Box>

                  {/* <div
                        dangerouslySetInnerHTML={{ __html: input.primary.title.html }}
                      /> */}
                  {/* </h1> */}

                  <MDBRow>
                    <MDBCol>
                      <Link
                        to={input.primary.button_1_link.url}
                        alt={input.primary.button_1_title}
                      >
                        <MDBBtn
                          color="light-green"
                          tag="span"
                          style={{ minWidth: "205px" }}
                        >
                          <MDBIcon icon="folder-open" className="mr-2" />
                          {input.primary.button_1_title}
                        </MDBBtn>
                      </Link>
                    </MDBCol>
                    {/* <MDBCol>
                        <Link
                          to={input.primary.button_2_link.url}
                          alt={input.primary.button_2_title}
                        >
                          <MDBBtn
                            color="primary"
                            tag="span"
                            style={{ minWidth: "205px" }}
                          >
                            <MDBIcon icon="folder-open" className="mr-2" />
                            {input.primary.button_2_title}
                          </MDBBtn>
                        </Link>
                      </MDBCol> */}
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBJumbotron>
        </HeroContainer>
      </HeroWrapper>
    </BackgroundImage>
  )
}
export default Hero
