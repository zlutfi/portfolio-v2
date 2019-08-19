import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact"

export default class ProjectsSection extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow size="12" className="py-5 text-center">
          <MDBCol>
            <h2 className="font-weight-bold">
              {input.primary.featured_projects_title.text}
            </h2>
            <hr className="heading-hr" />

            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: input.primary.featured_projects_subtitle.html,
              }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5">
          {input.items.map((project, index) => (
            <MDBCol size="12" md="6" lg="4" className="mb-4" key={index}>
              <MDBAnimation type="fadeIn" reveal delay={"0.3" * index + "s"}>
                <MDBCard className="card-zoom">
                  <Link
                    to={project.featured_project.document.url}
                    alt="View Project"
                  >
                    <MDBView
                      waves
                      className="projects"
                      alt={project.featured_project.document.data.thumbnail.alt}
                    >
                      <Img
                        fluid={
                          project.featured_project.document.data.thumbnail
                            .localFile.childImageSharp.fluid
                        }
                        alt={
                          project.featured_project.document.data.thumbnail.alt
                        }
                      />
                    </MDBView>
                  </Link>

                  <MDBCardBody>
                    <Link
                      to={project.featured_project.document.url}
                      name="View Project"
                      alt="View Project"
                    >
                      <div className="card-btn">
                        <MDBBtn color="primary" tag="span">
                          <MDBIcon icon="folder-open" />
                        </MDBBtn>
                      </div>
                    </Link>
                    <MDBCardTitle className="font-weight-bold" tag="h5">
                      {project.featured_project.document.data.title}
                    </MDBCardTitle>

                    {/* <MDBCardText>{project.featured_project.document.data.subtitle}</MDBCardText> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    )
  }
}

ProjectsSection.propTypes = {
  input: PropTypes.object.isRequired,
}
