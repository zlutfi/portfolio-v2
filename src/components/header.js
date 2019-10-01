import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBView,
  MDBMask,
} from "mdbreact"
import Reveal from "react-reveal/Reveal"
import BackgroundImage from "gatsby-background-image"

const Header = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
  bgColor = "unique-color-dark",
}) => (
  <>
    {/* <BackgroundImage fluid={background} backgroundColor={`#eee`}>
      <MDBJumbotron fluid id="page">
        <MDBContainer>
          <MDBRow className="py-5 my-5">
            <MDBCol size="8" md="4" className="text-center mb-n5 mx-auto">
              <div
                style={{ backgroundColor: "rgb(28, 78, 150)" }}
                className="z-depth-1 rounded py-5"
              >
              <Reveal effect="text-focus-in">
                <h1 className="h1-responsive font-weight-bold section-title">
                  {title}
                </h1>
              </Reveal>
              </div>
              <p className="lead">
                  <strong>{subtitle}</strong>
                </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    </BackgroundImage> */}
    <MDBView tag="header">
      <Img fluid={background} />
      <MDBMask className="flex-center" overlay="black-slight">
        <MDBContainer className="py-3 py-md-5 mt-5 mt-md-4">
          <MDBRow>
            <MDBCol
              size="12"
              md="8"
              className="text-center text-md-left mx-auto mx-md-0"
            >
              <Reveal effect="text-focus-in">
                <h1 className="h1-responsive font-weight-bold section-title white-text">
                  {title}
                </h1>
              </Reveal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  </>
)

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
}

Header.defaultProps = {
  title: "",
  subtitle: "",
  background: {},
}
