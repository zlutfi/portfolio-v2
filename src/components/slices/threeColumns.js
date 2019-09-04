import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBMask,
  MDBView,
} from "mdbreact"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

// Styled components for section
const Section = styled.div`
  padding: 3rem 0;
`

const ThreeColumns = ({ input }) => (
  <Section>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <h1>{input.primary.column_section_title.text}</h1>
          <p>{input.primary.column_section_subtitle.text}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="py-5">
        {input.items.map((col, index) => (
          <MDBCol size="12" md="4" key={index}>
            <Fade>
              <div style={{ height: "100%" }}>
                <MDBCard>
                  <MDBView>
                    <Img
                      fluid={col.column_image.localFile.childImageSharp.fluid}
                      className="rounded"
                    />
                    <MDBMask overlay="black-light" className="flex-center" />
                  </MDBView>
                  <MDBCardBody>
                    <MDBCardTitle>{col.column_title.text}</MDBCardTitle>
                    <MDBCardText>{col.column_content.text}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </Fade>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  </Section>
)

export default ThreeColumns

ThreeColumns.propTypes = {
  input: PropTypes.object.isRequired,
}
