import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const ImageRight = ({ input }) => (
  <MDBContainer>
    <MDBRow className="py-5 text-center text-md-left">
      <MDBCol size="12" md="6" className="order-md-last pb-5">
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
          <h2 className="h2-responsive font-weight-bold pb-3">
            {input.primary.right_image_title.text}
          </h2>
          <p
            className="text-center text-md-left"
            dangerouslySetInnerHTML={{
              __html: input.primary.right_image_paragraph.html,
            }}
          />
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default ImageRight

ImageRight.propTypes = {
  input: PropTypes.object.isRequired,
}
