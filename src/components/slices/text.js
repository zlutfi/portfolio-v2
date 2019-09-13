import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const Text = ({ input }) => (
  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol size="12" md="8" className="mx-auto">
        <Fade>
          <h2 className="font-weight-bold pb-3">
            {input.primary.section_title.text}
          </h2>

          <p>{input.primary.section_content.text}</p>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: input.primary.section_content.text.html,
            }}
          /> */}
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Text

Text.propTypes = {
  input: PropTypes.object.isRequired,
}
