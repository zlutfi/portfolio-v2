import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//MDB Hero Components
import {
  // MDBJumbotron,
  MDBRow,
  MDBCol,
  // MDBAnimation,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBMask,
} from "mdbreact"
import styled from "styled-components"
// import HeroText from "../../../images/hero_text.svg"
import posed from "react-pose"
// import SplitText from "react-pose-text"

// Styled components for section
const HeroWrapper = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
`

const Hero = styled.div`
  align-self: center;
  padding-top: 5rem;
`
const H1 = styled.h1`
  color: #ffffff;
  font-size: 5vh;
  font-weight: bold;
`

// const HeroTitle = styled.h1`
//   color: #fff;
//   height: 8rem;
// `

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

// const charPoses = {
//   exit: { opacity: 0 },
//   enter: { opacity: 1 },
// }

function HeroSection({ input }) {
  return (
    <BackgroundImage
      fluid={input.primary.background.localFile.childImageSharp.fluid}
    >
      {/* <MDBMask overlay="stylish-strong"> */}
      <HeroWrapper id="hero">
        <Hero>
          {/* <MDBJumbotron fluid id="hero"> */}
          <MDBContainer>
            <MDBRow>
              <MDBCol size="12" className="text-center mx-auto">
                <Box pose="enter" initialPose="exit">
                  <H1>
                    {/* className="white-text pb-3 font-weight-bold display-4 text-uppercase" */}
                    {/* <SplitText charPoses={charPoses}> */}
                    Developer & Designer
                    {/* </SplitText> */}
                  </H1>
                  {/* <HeroTitle className="display-2 font-weight-bold">
                    Developer <br />& Designer
                  </HeroTitle> */}

                  <h2 className="white-text lead pb-4">
                    {/* <SplitText charPoses={charPoses}> */}I Build Lightning
                    Fast Websites with React.
                    {/* </SplitText> */}
                  </h2>
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
                        outline
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
          {/* </MDBJumbotron> */}
        </Hero>
      </HeroWrapper>
      {/* </MDBMask> */}
    </BackgroundImage>
  )
}
export default HeroSection
