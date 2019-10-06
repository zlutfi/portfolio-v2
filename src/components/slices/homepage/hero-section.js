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
// import Reveal from "react-reveal/Reveal"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
// import SplitText from "react-pose-text"
// import posed, { PoseGroup } from "react-pose"

const Hero = ({ input }) => {
  // Transition properties for text animations
  // const charPoses = {
  //   exit: { opacity: 0, y: 20 },
  //   enter: {
  //     opacity: 1,
  //     y: 0,
  //     delay: ({ charIndex }) => charIndex * 30,
  //     delayChildren: 300,
  //   },
  // }
  return (
    <>
      <BackgroundImage
        fluid={input.primary.background.localFile.childImageSharp.fluid}
        style={{
          // Defaults are overwrite-able by setting one or each of the following:
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MDBJumbotron
          fluid
          // className="my-5"
          id="home"
          className="mb-0"
        >
          <MDBContainer>
            <MDBRow className="my-md-5 py-md-5">
              <MDBCol size="12" md="7" className="my-5 py-5 pr-5">
                {/* </Reveal>
                <Reveal delay={400} effect="text-focus-in"> */}
                <h1 className="white-text font-weight-bold h1-responsive">
                  Hey, I'm Z. I build lightning fast mobile-first websites and
                  apps.
                </h1>
                <h5>Continue to see some of my recent projects and skills.</h5>
                {/* </Reveal> */}

                <MDBRow className="mt-md-5">
                  <MDBCol>
                    {/* <Reveal bottom delay={800} effect="text-focus-in"> */}
                    <Link
                      to={input.primary.button_1_link.url}
                      alt={input.primary.button_1_title}
                      title={input.primary.button_1_title}
                    >
                      <MDBBtn
                        color="primary"
                        tag="span"
                        className="btn-rounded"
                      >
                        <span className="text-white">
                          {/* <MDBIcon icon="folder-open" className="mr-2" /> */}
                          {input.primary.button_1_title} &#8594;
                        </span>
                      </MDBBtn>
                      <MDBBtn
                        color="elegant"
                        tag="span"
                        className="btn-rounded"
                      >
                        <span className="text-white">
                          {/* <MDBIcon icon="folder-open" className="mr-2" /> */}
                          About Me &#8594;
                        </span>
                      </MDBBtn>
                    </Link>
                    {/* <p>
                    <OutboundLink
                      href="https://github.com/zlutfi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="My GitHub projects"
                    >
                      <MDBIcon
                        fab
                        icon="github"
                        className="text-white px-2"
                        size="2x"
                      />
                    </OutboundLink>
                  </p> */}
                    {/* </Reveal> */}
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol size="12" md="5">
                <MDBIcon icon="tachometer-alt white-text" size="10x" />
                <p>
                  This is where the screen will go. The hero nbackground will be
                  a gradient
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBJumbotron>
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: "relative", transform: "rotateX(180deg)" }}
        height="100%"
        width="100%"
      >
        <path
          fill="#ccc"
          fillOpacity="1"
          d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg> */}
      </BackgroundImage>
    </>
  )
}
export default Hero
