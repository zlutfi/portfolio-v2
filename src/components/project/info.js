import React from "react"
import PropTypes from "prop-types"
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBBadge,
  MDBContainer,
} from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Info = ({ input }) => (
  <Fade>
    <MDBContainer>
      <MDBRow className="py-5" between>
        <MDBCol className="pr-4">
          {/* <h2 className="h2-responsive font-weight-bold pb-3 text-center text-md-left">
            {input.primary.project_title}
          </h2> */}
          {/* <p className="text-center text-md-left">
            {input.primary.project_overview.text}
          </p> */}
          <p
            className="text-center text-md-left"
            dangerouslySetInnerHTML={{
              __html: input.primary.project_overview.html,
            }}
          />
        </MDBCol>
        <MDBCol size="10" md="5" lg="4" className="pt-5 pt-md-0 mx-auto">
          <MDBCard>
            <MDBCardHeader className="text-center text-md-left">
              {/* Font Awesome icon */}
              <FontAwesomeIcon
                icon="folder-open"
                className="text-primary mr-3"
              />
              Project Information
            </MDBCardHeader>

            <MDBCardBody>
              {/* Project role */}
              <MDBCardText tag="h4" className="pb-3 text-center text-md-left">
                <span className="font-weight-bold text-uppercase mr-2">
                  Role:
                </span>
                {input.primary.project_role.text}
              </MDBCardText>
              {/* Project type */}
              <MDBCardText tag="h4" className="pb-3 text-center text-md-left">
                <span className="font-weight-bold text-uppercase mr-2">
                  Type:
                </span>
                {input.primary.project_type.text}
              </MDBCardText>
              {/* Project tech features title */}
              {input.primary.project_features_title && (
                <MDBCardText tag="h4" className="pb-3 text-center text-md-left">
                  <span className="font-weight-bold text-uppercase mr-2">
                    {input.primary.project_features_title}:
                  </span>
                  {input.primary.project_features.text}
                </MDBCardText>
              )}
              {/* Project tech title */}
              {input.primary.project_technology_title && (
                <MDBCardText
                  tag="h4"
                  className="font-weight-bold text-uppercase text-center text-md-left"
                >
                  {input.primary.project_technology_title}
                </MDBCardText>
              )}
              {/* Project tech badges */}
              <MDBCardText className="text-center text-md-left">
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
              </MDBCardText>
              {/* Project live link */}
              <div className="text-center text-md-left">
                {input.primary.project_link.url && (
                  <OutboundLink
                    href={`${input.primary.project_link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn
                      color="primary"
                      size="sm"
                      tag="span"
                      className="btn-rounded"
                    >
                      {/* Font Awesome Icon */}
                      <FontAwesomeIcon
                        icon="desktop"
                        className="text-white mr-2"
                      />{" "}
                      View Live
                    </MDBBtn>
                  </OutboundLink>
                )}
                {/* Project source link */}
                {input.primary.project_code_link.url && (
                  <OutboundLink
                    href={`${input.primary.project_code_link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn
                      color="elegant"
                      size="sm"
                      tag="span"
                      className="btn-rounded"
                    >
                      {/* Font Awesome Icon */}
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="text-white mr-2"
                      />
                      View Code
                    </MDBBtn>
                  </OutboundLink>
                )}
              </div>
            </MDBCardBody>
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
