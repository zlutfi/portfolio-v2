import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBRow, MDBCol } from "mdbreact"

const TextImage = ({ input }) => (
  <MDBRow>
    <MDBCol size="12" md="5" className="py-5 order-md-last">
      <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
    </MDBCol>
    <MDBCol size="12" md="7" middle>
      <div dangerouslySetInnerHTML={{ __html: input.primary.content.html }} />
    </MDBCol>
  </MDBRow>
)

export default TextImage

TextImage.propTypes = {
  input: PropTypes.object.isRequired,
}
