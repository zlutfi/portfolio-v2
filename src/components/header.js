import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
// import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  // MDBView,
  // MDBMask,
} from "mdbreact"
import Title from "./title"

const Header = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
  bgColor = "unique-color-dark",
}) => {
  return (
    <>
      <BackgroundImage fluid={background} backgroundColor={`#eee`}>
        <MDBJumbotron fluid id="page" className="mb-0">
          <MDBContainer>
            <MDBRow className="py-5 my-5">
              <MDBCol size="12" className="mb-n5 mx-auto">
                <Title title={title} subtitle={subtitle} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBJumbotron>
      </BackgroundImage>
      {/*     
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
                <Title title={title} subtitle={subtitle} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView> */}
    </>
  )
}

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
