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
  <BackgroundImage fluid={background} backgroundColor={`#007bff`}>
    <MDBJumbotron
      fluid

      // style={{
      //   height: "20rem",
      // }}
    >
      <MDBContainer>
        <MDBRow className=" py-5 my-5">
          <MDBCol size="12" md="8" className="text-center text-md-left">
            <MDBAnimation type="fadeInUp">
              <h1 className="text-white">
                <strong>{title}</strong>
              </h1>
            </MDBAnimation>
          </MDBCol>
          <MDBCol
            size="12"
            md="8"
            className="text-center text-md-left mx-auto mx-md-0 pb-5 mb-5"
          >
            <MDBAnimation type="fadeInUp" delay="0.3s">
              {/* <h5 className="h5-responsive white-text">{subtitle}</h5> */}
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
