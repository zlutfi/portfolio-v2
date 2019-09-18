import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from "mdbreact"
import Reveal from "react-reveal/Reveal"
// import BackgroundImage from "gatsby-background-image"

const Header = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
  bgColor = "unique-color-dark",
}) => (
  <>
    {/* <BackgroundImage fluid={background} backgroundColor={`#eee`}> */}
    <MDBJumbotron fluid id="page">
      <MDBContainer>
        <MDBRow className="py-5 my-5">
          <MDBCol size="8" md="4" className="text-center mb-n5 mx-auto">
            {/* <div
                style={{ backgroundColor: "rgb(28, 78, 150)" }}
                className="z-depth-1 rounded py-5"
              > */}
            <Reveal effect="text-focus-in">
              <h1
                className="h1-responsive font-weight-bold section-title"
                style={{ color: "#222" }}
              >
                {title}
              </h1>
            </Reveal>
            {/* </div> */}
            {/* <p className="lead">
                  <strong>{subtitle}</strong>
                </p> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
    {/* </BackgroundImage> */}
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
