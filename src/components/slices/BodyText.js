import React from "react"
import PropTypes from "prop-types"
import { MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const BodyText = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol className="py-5">
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
      </Fade>
    </MDBCol>
  </MDBRow>
)

export default BodyText

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
