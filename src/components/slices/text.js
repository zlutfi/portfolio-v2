import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const Text = ({ input }) => (
  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol className="py-5">
        <Fade>
          <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Text

Text.propTypes = {
  input: PropTypes.object.isRequired,
}
