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
  MDBBadge,
  MDBMask,
} from "mdbreact"
import posed from "react-pose"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

// Styled components for section
const ProjectsWrapper = styled.div`
  padding: 3rem 0;
`
// Animations for cards on hover
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.05)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
})

export default class Projects extends Component {
  render() {
    const { input } = this.props
    return (
      <ProjectsWrapper>
        <MDBContainer className="py-4 py-md-5 mx-auto">
          {/* <MDBContainer className="mt-n5 mx-auto text-center"> */}
          <MDBRow>
            <MDBCol size="12" md="8" className="mx-auto">
              <Fade bottom>
                <h1 className="h1-responsive font-weight-bold text-center my-5">
                  {input.primary.featured_projects_title.text}
                </h1>
                <p className="lead text-center w-responsive mx-auto mb-5">
                  {input.primary.featured_projects_subtitle.text}
                </p>
              </Fade>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-0 mx-auto">
            {input.items.map((project, index) => (
              <MDBCol size="12" md="6" lg="4" className="mb-4" key={index}>
                <Zoom bottom delay={300 * index}>
                  <Box className="box">
                    <MDBCard>
                      <Link
                        to={project.featured_project.document.url}
                        alt="View Project"
                      >
                        <MDBView hover zoom>
                          <Img
                            fluid={
                              project.featured_project.document.data.thumbnail
                                .localFile.childImageSharp.fluid
                            }
                            alt={
                              project.featured_project.document.data.thumbnail
                                .alt
                            }
                          />
                          <MDBMask
                            className="flex-center"
                            overlay="stylish-strong"
                          >
                            <MDBBtn size="sm" color="light-green" tag="span">
                              <MDBIcon icon="folder-open" className="mr-2" />
                              View Project
                            </MDBBtn>
                          </MDBMask>
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
                        <MDBCardTitle className="font-weight-bold" tag="div">
                          <MDBRow between>
                            <MDBCol size="auto">
                              {
                                project.featured_project.document.data.title
                                  .text
                              }
                            </MDBCol>
                            <MDBCol size="auto">
                              {project.featured_project.document.tags.map(
                                (tag, index) => (
                                  <MDBBadge
                                    pill
                                    color="grey"
                                    className="ml-2"
                                    key={index}
                                  >
                                    {tag}
                                  </MDBBadge>
                                )
                              )}
                            </MDBCol>
                          </MDBRow>
                        </MDBCardTitle>
                        <MDBCardText>
                          {project.featured_project.document.data.subtitle}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </Box>
                </Zoom>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </ProjectsWrapper>
    )
  }
}

Projects.propTypes = {
  input: PropTypes.object.isRequired,
}
