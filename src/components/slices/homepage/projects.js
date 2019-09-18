import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBIcon,
  MDBCardText,
  // MDBBadge,
  MDBMask,
} from "mdbreact"
// import posed from "react-pose"
// import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

// Animations for cards on hover
// const Box = posed.div({
//   hoverable: true,
//   pressable: true,
//   init: {
//     scale: 1,
//     boxShadow: "0px 5px 10px rgba(0,0,0,0.05)",
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
//   },
//   press: {
//     scale: 1.1,
//     boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
//   },
// })

export default class Projects extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <MDBContainer className="py-4 py-md-5 mx-auto">
          {/* Section Header */}
          {/* <MDBContainer className="mt-n5 mx-auto text-center"> */}
          <MDBRow>
            <MDBCol size="12" md="8" className="mx-auto">
              <Fade bottom>
                <h2 className="h2-responsive font-weight-bold text-center my-4 section-title">
                  {input.primary.featured_projects_title.text}
                </h2>
                <p className="lead grey-text text-center w-responsive mx-auto mb-5">
                  {input.primary.featured_projects_subtitle.text}
                </p>
              </Fade>
            </MDBCol>
          </MDBRow>
          {/* Project Cards */}
          <MDBRow className="mb-0 mx-auto">
            {input.items.map((project, index) => (
              <MDBCol size="12" md="6" className="mb-4" key={index}>
                <Fade bottom delay={300 * index}>
                  {/* <Box className="box"> */}
                  <MDBCard>
                    <Link
                      to={project.featured_project.document.url}
                      alt="View Project"
                      title="View Project"
                    >
                      <MDBView hover>
                        <Img
                          fluid={
                            project.featured_project.document.data.thumbnail
                              .localFile.childImageSharp.fluid
                          }
                          alt={
                            project.featured_project.document.data.thumbnail.alt
                          }
                        />
                        <MDBMask
                          className="flex-center"
                          overlay="stylish-strong"
                        >
                          <MDBIcon
                            icon="search"
                            size="4x"
                            className="white-text"
                          />

                          {/* <MDBBtn size="sm" color="light-green" tag="span">
                              <MDBIcon icon="folder-open" className="mr-2" />
                              View Project
                            </MDBBtn> */}
                        </MDBMask>
                      </MDBView>
                    </Link>
                    <MDBCardBody>
                      <Link
                        to={project.featured_project.document.url}
                        name="View Project"
                        alt="View Project"
                        title="View Project"
                      >
                        <div className="card-btn">
                          <MDBBtn color="primary" tag="span">
                            <MDBIcon icon="folder-open" />
                          </MDBBtn>
                        </div>
                      </Link>
                      <MDBCardTitle className="font-weight-bold" tag="div">
                        <MDBRow between>
                          <MDBCol size="auto">
                            {project.featured_project.document.data.title.text}
                          </MDBCol>
                          {/* <MDBCol size="auto">
                              {project.featured_project.document.tags.map(
                                (tag, index) => (
                                  <MDBBadge
                                    pill
                                    color="dark"
                                    className="ml-2"
                                    key={index}
                                  >
                                    {tag}
                                  </MDBBadge>
                                )
                              )}
                            </MDBCol> */}
                        </MDBRow>
                      </MDBCardTitle>
                      <MDBCardText>
                        {project.featured_project.document.data.subtitle}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  {/* </Box> */}
                </Fade>
              </MDBCol>
            ))}
          </MDBRow>
          {/* CTA Section */}
          <MDBRow className="py-5 justify-content-center">
            <Link to="/projects" title="View Projects">
              <MDBBtn color="elegant" tag="span">
                <MDBIcon icon="folder-open" className="mr-2" />
                View more projects
              </MDBBtn>
            </Link>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

Projects.propTypes = {
  input: PropTypes.object.isRequired,
}
