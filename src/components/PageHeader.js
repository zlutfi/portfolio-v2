import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  //MDBIcon,
  // MDBCard,
  // MDBCardBody,
  // MDBCardText,
  // MDBCardTitle,
} from "mdbreact"
import posed from "react-pose"
import SplitText from "react-pose-text"
import Navbar from "../components/navbar"

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

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
}

const PageHero = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
  bgColor = "unique-color-dark",
}) => (
  <>
    <Navbar bgColor={bgColor} transparent={true} />

    <BackgroundImage fluid={background} backgroundColor={`rgba(0,123,255,0.2)`}>
      <MDBJumbotron fluid>
        <MDBContainer>
          <Box pose="enter" initialPose="exit">
            <MDBRow className="py-5 my-5">
              <MDBCol
                size="12"
                md="5"
                className="text-center text-md-left mb-n5"
              >
                <h1 className="font-weight-bold">
                  <strong>
                    <SplitText charPoses={charPoses}>{title}</SplitText>
                  </strong>
                </h1>
              </MDBCol>
            </MDBRow>
          </Box>
        </MDBContainer>
      </MDBJumbotron>
    </BackgroundImage>
  </>
)

export default PageHero

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
}

PageHero.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
  background: {},
}
