import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBRow, MDBCol } from "mdbreact"

const ImageLeft = ({ input }) => (
  <MDBRow>
    <MDBCol size="12" md="5" className="py-5">
      <Img
        fluid={input.primary.left_image_image.localFile.childImageSharp.fluid}
      />
    </MDBCol>
    <MDBCol size="12" md="7" middle>
      <h2>{input.primary.left_image_title.text}</h2>
      <p>{input.primary.left_image_paragraph.text}</p>
    </MDBCol>
  </MDBRow>
)

export default ImageLeft

ImageLeft.propTypes = {
  input: PropTypes.object.isRequired,
}
