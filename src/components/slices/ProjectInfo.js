import React from "react"
import PropTypes from "prop-types"
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const ProjectInfo = ({ input }) => (
  <MDBRow className="py-5">
    <MDBCol>
      <OutboundLink
        href={input.primary.project_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MDBBtn color="primary" size="sm" tag="span">
          <MDBIcon icon="desktop" className="mr-2" />
          View Website
        </MDBBtn>
      </OutboundLink>
      <OutboundLink
        href={input.primary.project_code_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MDBBtn color="elegant" size="sm" tag="span">
          <MDBIcon fab icon="github" className="mr-2" />
          View Code
        </MDBBtn>
      </OutboundLink>
    </MDBCol>
  </MDBRow>
)

export default ProjectInfo

ProjectInfo.propTypes = {
  input: PropTypes.object.isRequired,
}
