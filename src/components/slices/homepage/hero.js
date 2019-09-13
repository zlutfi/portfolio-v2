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
import Pulse from "react-reveal/Pulse"

// Styled components for section
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
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12" className="text-center mx-auto my-5">
            <MDBJumbotron fluid className="my-5">
              <H1>
                <Fade>
                  <div className="pt-5 mt-5">
                    <Headline />
                  </div>
                </Fade>
                <Fade delay={400}>
                  <p className="py-5">I design and build for the web</p>
                </Fade>
                {/* <div
                        dangerouslySetInnerHTML={{
                          __html: input.primary.title.html,
                        }}
                      /> */}
              </H1>

              {/* I'm <Span>Z,</Span> <Span> a Developer </Span> &
                      <Span> Designer. </Span> */}

              <MDBRow className="mt-md-5 mt-0">
                <MDBCol>
                  <Fade bottom delay={800}>
                    <Pulse count={5} duration={2000}>
                      <Link
                        to={input.primary.button_1_link.url}
                        alt={input.primary.button_1_title}
                        title={input.primary.button_1_title}
                      >
                        <MDBIcon
                          far
                          icon="arrow-alt-circle-down"
                          className="mr-2 white-text"
                          size="3x"
                        />

                        {/* <MDBBtn color="white" tag="span" outline>
                              <MDBIcon icon="folder-open" className="mr-2" />
                              {input.primary.button_1_title}
                            </MDBBtn> */}
                      </Link>
                    </Pulse>
                  </Fade>
                </MDBCol>
              </MDBRow>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </BackgroundImage>
  )
}
export default Hero

const Headline = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 100" width="80%">
        <clipPath id="a">
          <path d="M0 100.005h37.191a59.374 59.374 0 0018.383-3.036 53.429 53.429 0 0017.044-9.18 47.587 47.587 0 0012.537-15.536q4.86-9.391 4.86-22.245 0-12.711-4.226-22.1A45.229 45.229 0 0074.52 12.3a46.227 46.227 0 00-16.2-9.251A60.05 60.05 0 0039.3.011H0v99.994zM17.752 83.9V16.112h16.2a55.7 55.7 0 0115 1.907 32.6 32.6 0 0111.832 5.932A27.052 27.052 0 0168.6 34.472a38.914 38.914 0 012.817 15.536 35.009 35.009 0 01-3.169 15.606 28.138 28.138 0 01-8.663 10.451A37.319 37.319 0 0146.7 82a62.7 62.7 0 01-15.706 1.9H17.752z" />
        </clipPath>
        <path
          strokeDasharray="279"
          strokeDashoffset="279"
          strokeWidth="20"
          d="M10 100L9 15S5.592 7.532 8 6s10 1 10 1 39.69-1.041 53 14 10.451 33.53 10 36-5.444 22.916-27 32c-14.85 4.761-39 4-39 4"
          className="writing"
          clip-path="url(#a)"
          transform="translate(25)"
        />
        <clipPath id="b">
          <path
            d="M-.009 100.006H69V83.9H17.846V56.785H63.9v-16.1H17.846V16.107h48.6V0H-.009v100z"
            className="cls-1"
          />
        </clipPath>
        <path
          strokeDasharray="383"
          strokeDashoffset="383"
          strokeWidth="20"
          d="M73 8H9l1 84h63s-97.057 4.319-75-44c24.157.491 70 1 70 1"
          className="writing"
          clip-path="url(#b)"
          transform="translate(140)"
        />
        <clipPath id="c">
          <path d="M39.657 99.994h15.549L96.005 0H76.6L48.216 75.56 20.684 0H0z" />
        </clipPath>
        <path
          strokeDasharray="269"
          strokeDashoffset="269"
          strokeWidth="19"
          d="M6-11l48 122H40L89-5"
          className="writing"
          clip-path="url(#c)"
          transform="translate(234)"
        />
        <clipPath>
          <path
            d="M-.009 100.006H69V83.9H17.846V56.785H63.9v-16.1H17.846V16.107h48.6V0H-.009v100z"
            className="cls-1"
          />
        </clipPath>
        <path
          strokeDasharray="383"
          strokeDashoffset="383"
          strokeWidth="20"
          d="M73 8H9l1 84h63s-97.057 4.319-75-44c24.157.491 70 1 70 1"
          className="writing"
          clip-path="url(#b)"
          transform="translate(355)"
        />
        <clipPath id="d">
          <path d="M.012 100.005h59.979V83.9h-42.28V0H.012v100.005z" />
        </clipPath>
        <path
          strokeDasharray="142"
          strokeDashoffset="142"
          strokeWidth="18"
          d="M9 0v91l53 1"
          className="writing"
          clip-path="url(#d)"
          transform="translate(449)"
        />
        <clipPath id="e">
          <path
            d="M3.766 70.706a45.365 45.365 0 0026.293 25.743 55.7 55.7 0 0020.241 3.563 56.677 56.677 0 0020.442-3.832 47.915 47.915 0 0016-10.284 46.545 46.545 0 0010.49-15.728A52.833 52.833 0 00101 49.87a54.61 54.61 0 00-3.766-20.7A46.28 46.28 0 0086.747 13.3a44.715 44.715 0 00-16-10.015A56.625 56.625 0 0050.3 0a55.7 55.7 0 00-20.241 3.559 45.713 45.713 0 00-15.87 10.149 46.593 46.593 0 00-10.423 15.93A55.09 55.09 0 000 50.407a52.794 52.794 0 003.766 20.299zm16.341-34.683A32.935 32.935 0 0126.764 25.2a30.6 30.6 0 0110.289-7.259 33.006 33.006 0 0113.382-2.621 33.5 33.5 0 0113.449 2.621A30.465 30.465 0 0174.239 25.2 33.008 33.008 0 0180.9 36.023a37.136 37.136 0 012.35 13.309 40.937 40.937 0 01-2.35 14.115A33.168 33.168 0 0174.239 74.6 30.782 30.782 0 0163.883 82a32.749 32.749 0 01-13.449 2.689A32.27 32.27 0 0137.052 82a30.932 30.932 0 01-10.288-7.4 33.1 33.1 0 01-6.657-11.158 40.888 40.888 0 01-2.354-14.115 37.09 37.09 0 012.354-13.304z"
            className="cls-1"
          />
        </clipPath>
        <path
          strokeDasharray="267"
          strokeDashoffset="267"
          strokeWidth="28"
          d="M52 8S12.057 5.147 9 49c.7 33.747 22.027 43.678 42 44 19.973-1.088 40.5-12.387 41-44-6.623-31.3-15.044-38.662-40-41z"
          className="writing"
          clip-path="url(#e)"
          transform="translate(534)"
        />
        <clipPath id="f">
          <path
            d="M0 100.01h17.67V58.621h12.624a97.329 97.329 0 0015.079-1.13 36.152 36.152 0 0012.695-4.308 23.176 23.176 0 008.7-8.97q3.225-5.79 3.226-15.256 0-8.333-3.016-13.914a24.242 24.242 0 00-8.066-8.9A33.953 33.953 0 0047.2 1.411 66.557 66.557 0 0033.38 0H0v100.01zm17.67-56.645v-28.11h12.624a65.664 65.664 0 017.294.424 21.194 21.194 0 016.873 1.907 13.051 13.051 0 015.05 4.238 12.545 12.545 0 011.964 7.416q0 5.085-2.174 7.91a13.317 13.317 0 01-5.611 4.238 23.958 23.958 0 01-7.5 1.7q-4.07.285-7.855.282H17.67z"
            className="cls-1"
          />
        </clipPath>
        <path
          strokeDasharray="288"
          strokeDashoffset="288"
          strokeWidth="18"
          d="M9 101V-10S-20.711-22.492-9 7c23.536-.093 46.991 1.1 53 1 22.945 7.046 23.66 37.186 0 41-17.433 1.8-31 2-31 2"
          className="writing"
          clip-path="url(#f)"
          transform="translate(660)"
        />
        <clipPath>
          <path
            d="M-.009 100.006H69V83.9H17.846V56.785H63.9v-16.1H17.846V16.107h48.6V0H-.009v100z"
            className="cls-1"
          />
        </clipPath>
        <path
          strokeDasharray="383"
          strokeDashoffset="383"
          strokeWidth="20"
          d="M73 8H9l1 84h63s-97.057 4.319-75-44c24.157.491 70 1 70 1"
          className="writing"
          clip-path="url(#b)"
          transform="translate(755)"
        />
        <clipPath id="g">
          <path
            d="M.018 100h17.927V57.626h13.089L54.367 100h21.626L49.245 55.79q11.238-1.553 17.286-8.9t6.047-18.222q0-8.475-3.13-13.984a24.119 24.119 0 00-8.394-8.758 36.106 36.106 0 00-12.022-4.59A71.863 71.863 0 0035.018-.006h-35V100zm17.927-57.629V15.25h15.508a60.713 60.713 0 017.042.424 22.415 22.415 0 016.616 1.766 11.5 11.5 0 014.837 4.026 12.232 12.232 0 011.85 7.063q0 4.946-1.992 7.7a12.007 12.007 0 01-5.193 4.1 23.641 23.641 0 01-7.043 1.7q-3.841.354-7.683.353H17.945z"
            className="cls-1"
          />
        </clipPath>
        <path
          strokeDasharray="361"
          strokeDashoffset="361"
          strokeWidth="21"
          d="M9 102V-6S-24.1-12.2-3 7c24.14-.37 36.095.14 48 1 21.856-.443 28.018 35.833 0 41-5.935.337-28 1-28 1s19.887-3.959 23 6c6.74 10.273 34 55 34 55"
          className="writing"
          clip-path="url(#g)"
          transform="translate(849)"
        />
      </svg>
    </>
  )
}
