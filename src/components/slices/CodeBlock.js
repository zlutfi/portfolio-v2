import React from "react"
import PropTypes from "prop-types"
import { MDBRow, MDBCol } from "mdbreact"

const CodeBlock = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol>
      <pre>
        <code>
          <div
            dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }}
          />
        </code>
      </pre>
    </MDBCol>
  </MDBRow>
)

export default CodeBlock

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired,
}
