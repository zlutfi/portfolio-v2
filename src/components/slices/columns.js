import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

// Styled components for section
const Section = styled.div`
  // background-color: #f7f8fa;
`

const Columns = ({ input }) => (
  <Section className="py-0 py-md-5">
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <h1 className="font-weight-bold text-center">
            {input.primary.section_title.text}
          </h1>
        </MDBCol>
      </MDBRow>
      <MDBRow className="py-5">
        {input.items.map((col, index) => (
          <MDBCol
            size={input.primary.column_size}
            md={input.primary.column_size_md}
            lg={input.primary.column_size_lg}
            key={index}
            className="mb-5 mb-md-0 mx-auto"
          >
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
  </Section>
)

export default Columns

Columns.propTypes = {
  input: PropTypes.object.isRequired,
}
