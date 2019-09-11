import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from "mdbreact"
import posed from "react-pose"
// import SplitText from "react-pose-text"

// Animations and such
const Box = posed.div({
  exit: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 50,
  },
})

// const charPoses = {
//   exit: { opacity: 0 },
//   enter: { opacity: 1 },
// }

const Header = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
  bgColor = `unique-color-dark`,
}) => (
  <>
    <BackgroundImage fluid={background} backgroundColor={`#eee`}>
      <MDBJumbotron
        fluid
        style={{
          height: "50vh",
          marginTop: "50px",
        }}
      >
        <MDBContainer className="py-3 py-md-5 mt-5 mt-md-4">
          <Box pose="enter" initialPose="exit">
            <MDBRow>
              <MDBCol size="12" md="8" className="text-center text-md-left">
                {/* <span className="hero-text-block">
                  <h1 className="text-white d-none d-md-block">
                    <strong>
                      <SplitText charPoses={charPoses}>{title}</SplitText>
                    </strong>
                  </h1>
                  <h2 className="text-white font-weight-bold d-block d-md-none">
                    <strong>
                      <SplitText charPoses={charPoses}>{title}</SplitText>
                    </strong>
                  </h2>
                </span> */}
              </MDBCol>
              <MDBCol
                size="12"
                md="8"
                className="text-center text-md-left mx-auto mx-md-0"
              >
                {/* <h5 className="h5-responsive d-none d-md-block">
                  <SplitText charPoses={charPoses}>{subtitle}</SplitText>
                </h5>
                <p className="d-block d-md-none black-text">
                  <SplitText charPoses={charPoses}>{subtitle}</SplitText>
                </p> */}
              </MDBCol>
            </MDBRow>
          </Box>
        </MDBContainer>
      </MDBJumbotron>
    </BackgroundImage>
  </>
)

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
}

Header.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
  background: {},
}
