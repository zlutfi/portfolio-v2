import React from "react"
import PropTypes from "prop-types"
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardText,
  MDBBadge,
  MDBContainer,
} from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Fade from "react-reveal/Fade"

const Info = ({ input }) => (
  <Fade>
    <MDBContainer>
      <MDBRow className="py-5" between>
        <MDBCol>
          <h2 className="h2-responsive font-weight-bold pb-3">
            {input.primary.project_title}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: input.primary.project_overview.html,
            }}
          />
        </MDBCol>
        <MDBCol md="auto">
          <MDBCard>
            <MDBCardHeader>
              <MDBIcon icon="folder" className="mr-2 text-primary" />
              Project Information
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText tag="h4" className="font-weight-bold text-uppercase">
                Role
              </MDBCardText>
              <MDBCardText>{input.primary.project_role.text}</MDBCardText>
              <MDBCardText tag="h4" className="font-weight-bold text-uppercase">
                Type
              </MDBCardText>
              <MDBCardText>{input.primary.project_type.text}</MDBCardText>

              <MDBCardText tag="h4" className="font-weight-bold text-uppercase">
                Technology Used
              </MDBCardText>
              {input.items.map((tech, index) => (
                <MDBBadge
                  key={index}
                  color="elegant-color"
                  pill
                  className="mr-2"
                >
                  {tech.project_technology}
                </MDBBadge>
              ))}
            </MDBCardBody>
            <MDBCardFooter>
              {input.primary.project_link && (
                <OutboundLink
                  href={`${input.primary.project_link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBBtn color="primary" size="sm" tag="span">
                    <MDBIcon icon="desktop" className="mr-2" />
                    View Website
                  </MDBBtn>
                </OutboundLink>
              )}
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
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Fade>
)

export default Info

Info.propTypes = {
  input: PropTypes.object.isRequired,
}
