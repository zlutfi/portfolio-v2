import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const TextImage = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol size="12" md="5" className="py-5 order-md-last">
      <Fade delay={200}>
        <Img
          fluid={input.primary.image.localFile.childImageSharp.fluid}
          className="rounded"
        />
      </Fade>
    </MDBCol>
    <MDBCol size="12" md="7" middle>
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: input.primary.content.html }} />
      </Fade>
    </MDBCol>
  </MDBRow>
)

export default TextImage

TextImage.propTypes = {
  input: PropTypes.object.isRequired,
}