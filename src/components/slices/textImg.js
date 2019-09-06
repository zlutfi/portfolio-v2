import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withiepolyfill"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const TextImage = ({ input }) => (
  <MDBContainer>
    <MDBRow className="pt-3">
      <MDBCol size="12" md="5" className="pb-5 order-md-last">
        <Fade delay={200}>
          <Img
            fluid={input.primary.image.localFile.childImageSharp.fluid}
            className="rounded"
          />
        </Fade>
      </MDBCol>
      <MDBCol size="12" md="7" middle className="text-center text-md-left">
        <Fade>
          <div
            dangerouslySetInnerHTML={{ __html: input.primary.content.html }}
          />
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default TextImage

TextImage.propTypes = {
  input: PropTypes.object.isRequired,
}
