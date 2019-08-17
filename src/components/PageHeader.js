import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBAnimation,
  //MDBIcon,
} from "mdbreact"

const PageHero = ({
  title = this.props.title,
  subtitle = this.props.subtitle,
  background = this.props.background,
}) => (
  <BackgroundImage fluid={background} backgroundColor={`#eee`}>
    <MDBJumbotron
      fluid
      id="hero"
      style={{
        height: "20rem",
      }}
    >
      <MDBContainer className="py-3 py-md-5 mt-5 mt-md-4">
        <MDBRow>
          <MDBCol size="12" md="8" className="text-center text-md-left">
            <MDBAnimation type="fadeInUp">
              <span className="hero-text-block">
                <h1 className="text-primary d-none d-md-block">
                  <strong>{title}</strong>
                </h1>
                <h2 className="text-primary font-weight-bold d-block d-md-none">
                  <strong>{title}</strong>
                </h2>
              </span>
            </MDBAnimation>
          </MDBCol>
          <MDBCol
            size="12"
            md="8"
            className="text-center text-md-left mx-auto mx-md-0"
          >
            <MDBAnimation type="fadeInUp" delay="0.3s">
              <h5 className="h5-responsive d-none d-md-block">{subtitle}</h5>
              <p className="d-block d-md-none black-text">{subtitle}</p>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  </BackgroundImage>
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
