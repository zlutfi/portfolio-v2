import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const ImageRight = ({ input }) => (
  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol size="12" md="6" className="order-md-last py-5">
        <Fade>
          <Img
            fluid={
              input.primary.right_image_image.localFile.childImageSharp.fluid
            }
            className="rounded"
          />
        </Fade>
      </MDBCol>
      <MDBCol size="12" md="6" middle>
        <Fade delay={300}>
          <h2 className="h2-responsive font-weight-bold">
            {input.primary.right_image_title.text}
          </h2>
          <p>{input.primary.right_image_paragraph.text}</p>
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default ImageRight

ImageRight.propTypes = {
  input: PropTypes.object.isRequired,
}
