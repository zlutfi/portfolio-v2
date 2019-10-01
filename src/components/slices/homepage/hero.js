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
import Reveal from "react-reveal/Reveal"
import { OutboundLink } from "gatsby-plugin-google-analytics"

function Hero({ input }) {
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
          style={{ backgroundColor: "transparent" }}
          id="home"
        >
          <MDBContainer>
            <MDBRow className="my-md-5 py-md-5">
              <MDBCol size="12" md="auto" className="my-5 py-5 pr-5">
                <Reveal effect="text-focus-in">
                  <h3 className="h3-responsive text-uppercase font-weight-bold white-text">
                    Hey I'm Z.
                  </h3>
                </Reveal>
                <Reveal effect="text-focus-in">
                  <h1 className="h1-responsive text-uppercase font-weight-bold white-text">
                    A Front-end Developer
                  </h1>
                </Reveal>
                <Reveal delay={400} effect="text-focus-in">
                  <h2 className="white-text h2-responsive">
                    I build lightning fast mobile-first websites and apps
                  </h2>
                </Reveal>

                <MDBRow className="mt-md-5">
                  <MDBCol>
                    <Reveal bottom delay={800} effect="text-focus-in">
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
                      </Link>
                      <br />
                      <p>
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
                        </OutboundLink>{" "}
                        <OutboundLink
                          href="https://github.com/zlutfi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="My GitHub projects"
                        >
                          <MDBIcon
                            fab
                            icon="twitter"
                            className="text-white px-2"
                            size="2x"
                          />
                        </OutboundLink>
                      </p>
                    </Reveal>
                  </MDBCol>
                  {/* <MDBCol>
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
                    </OutboundLink>{" "}
                    <OutboundLink
                      href="https://github.com/zlutfi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="My GitHub projects"
                    >
                      <MDBIcon
                        fab
                        icon="twitter"
                        className="text-white px-2"
                        size="2x"
                      />
                    </OutboundLink>
                  </MDBCol> */}
                </MDBRow>
              </MDBCol>
              {/* <MDBCol>
                <img
                  src="https://placehold.it/600x600"
                  alt="Something"
                  className="img-fluid"
                />
              </MDBCol> */}
            </MDBRow>
          </MDBContainer>
        </MDBJumbotron>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: "relative" }}
          height="100%"
          width="100%"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L480,64L960,192L1440,0L1440,320L960,320L480,320L0,320Z"
          ></path>
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: "relative", transform: "rotateY(180deg)" }}
          height="100%"
          width="100%"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </BackgroundImage>
    </>
  )
}
export default Hero
