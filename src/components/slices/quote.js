import React from "react"
import PropTypes from "prop-types"
import { MDBRow, MDBCol } from "mdbreact"

const Quote = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol>
      <blockquote className="blockquote">
        <div dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
      </blockquote>
    </MDBCol>
  </MDBRow>
)

export default Quote

Quote.propTypes = {
  input: PropTypes.object.isRequired,
}
