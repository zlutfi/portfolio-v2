import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from "mdbreact"
import Fade from "react-reveal/Fade"
import BackgroundImage from "gatsby-background-image"

const Header = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
  bgColor = "unique-color-dark",
}) => (
  <>
    <BackgroundImage fluid={background} backgroundColor={`#eee`}>
      <MDBJumbotron fluid id="page">
        <MDBContainer>
          <MDBRow className="py-5 my-5">
            <MDBCol size="12" md="5" className="text-center text-md-left mb-n5">
              <Fade bottom>
                <h1 className="font-weight-bold text-primary">{title}</h1>
                <p className="lead">
                  <strong>{subtitle}</strong>
                </p>
              </Fade>
            </MDBCol>
          </MDBRow>
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
  title: "",
  subtitle: "",
  background: {},
}
