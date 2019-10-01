import React from "react"
import PropTypes from "prop-types"
// import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  MDBIcon,
} from "mdbreact"
import Fade from "react-reveal/Fade"

const TextCard = ({ input }) => (
  <MDBContainer>
    <MDBRow className="pt-3">
      <MDBCol size="12" md="5" className="pb-5 order-md-last">
        <Fade delay={200}>
          <MDBCard style={{ boxShadow: "0 16px 48px rgba(32,41,50,.12)" }}>
            {/* <Img
              fluid={input.primary.image.localFile.childImageSharp.fluid}
              className="rounded"
            /> */}
            <MDBCardHeader>
              <MDBIcon icon="info-circle" className="mr-3 text-primary" />
              {input.primary.card_title}
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>{input.primary.card_content.text}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Fade>
      </MDBCol>
      <MDBCol
        size="12"
        md="7"
        middle
        className="text-center text-md-left order-first pb-5 pb-md-0"
      >
        <Fade>
          <div
            dangerouslySetInnerHTML={{ __html: input.primary.content.html }}
          />
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default TextCard

TextCard.propTypes = {
  input: PropTypes.object.isRequired,
}
