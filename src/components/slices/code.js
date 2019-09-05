import React from "react"
import PropTypes from "prop-types"
import { MDBRow, MDBCol } from "mdbreact"
// import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

const Code = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol className="py-5">
      <Fade up>
        <pre>
          <code>
            <div
              dangerouslySetInnerHTML={{
                __html: input.primary.code_block.html,
              }}
            />
          </code>
        </pre>
      </Fade>
    </MDBCol>
  </MDBRow>
)

export default Code

Code.propTypes = {
  input: PropTypes.object.isRequired,
}
