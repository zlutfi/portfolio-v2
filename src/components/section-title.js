import React from "react"
import Zoom from "react-reveal/Zoom"
import { MDBRow, MDBCol } from "mdbreact"

const SectionTitle = props => {
  // Header transition styling
  return (
    <MDBRow>
      <MDBCol size="12" md="8" className="mx-auto">
        <Zoom delay={400}>
          <h2 className="h2-responsive font-weight-bold text-center my-4 section-title">
            {props.title}
          </h2>
          {props.subtitle && (
            <p className="lead grey-text text-center w-responsive mx-auto mb-5">
              {props.subtitle}
            </p>
          )}
        </Zoom>
      </MDBCol>
    </MDBRow>
  )
}

export default SectionTitle
