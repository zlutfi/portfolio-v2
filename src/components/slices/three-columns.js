import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const ThreeColumns = ({ input }) => (
  <MDBContainer className="oy-0 py-md-5">
    <MDBRow>
      <MDBCol>
        <h1 className="font-weight-bold">
          {input.primary.column_section_title.text}
        </h1>
      </MDBCol>
    </MDBRow>
    <MDBRow className="py-5">
      {input.items.map((col, index) => (
        <MDBCol size="10" md="4" key={index} className="mb-5 mb-md-0 mx-auto">
          <Fade>
            <h4 className="font-weight-bold pb-3">
              {/* <MDBIcon
                  icon="code"
                  className="mr-3 light-green-text mb-4"
                /> */}
              {col.column_title.text}
            </h4>
            <p>{col.column_content.text}</p>
          </Fade>
        </MDBCol>
      ))}
    </MDBRow>
  </MDBContainer>
)

export default ThreeColumns

ThreeColumns.propTypes = {
  input: PropTypes.object.isRequired,
}
