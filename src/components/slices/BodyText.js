import React from "react"
import PropTypes from "prop-types"
import { MDBRow, MDBCol } from "mdbreact"

const BodyText = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol>
      <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
    </MDBCol>
  </MDBRow>
)

export default BodyText

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
