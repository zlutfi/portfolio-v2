import React from "react"
import PropTypes from "prop-types"
import { MDBContainer } from "mdbreact"

const BodyText = ({ input }) => (
  <MDBContainer>
    <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
  </MDBContainer>
)

export default BodyText

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
}
