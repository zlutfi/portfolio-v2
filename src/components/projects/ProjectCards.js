import React from "react"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBBadge,
  MDBBtn,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import posed from "react-pose"
import Zoom from "react-reveal/Zoom"

const ProjectCards = ({ input }) => {
  return (
    <MDBRow className="pb-5">
      {input.map((project, index) => (
        <MDBCol size="12" md="6" xl="4" className="mb-4" key={index}>
          <Zoom delay={300 * index}>
            <MDBCard style={{ backgroundColor: "#f8f9fa" }}>
              <Link to={project.node.url}>
                <MDBView hover zoom>
                  <Img
                    fluid={
                      project.node.data.thumbnail.localFile.childImageSharp
                        .fluid
                    }
                    alt="alt text bruh"
                  />
                  <MDBMask className="flex-center" overlay="stylish-strong">
                    <MDBBtn size="sm" color="primary" tag="span">
                      <MDBIcon icon="folder-open" className="mr-2" />
                      View Project
                    </MDBBtn>
                  </MDBMask>
                </MDBView>
              </Link>
              <MDBCardBody>
                <div className="card-btn">
                  <Link to={project.node.url}>
                    <MDBBtn color="primary" tag="span">
                      <MDBIcon icon="folder-open" />
                    </MDBBtn>
                  </Link>
                </div>

                <MDBCardTitle className="font-weight-bold" tag="div">
                  <MDBRow between>
                    <MDBCol size="auto">{project.node.data.title.text}</MDBCol>
                    <MDBCol size="auto">
                      {project.node.tags.map((tag, index) => (
                        <MDBBadge
                          pill
                          color="grey"
                          className="ml-2"
                          key={index}
                        >
                          {tag}
                        </MDBBadge>
                      ))}
                    </MDBCol>
                  </MDBRow>
                </MDBCardTitle>
                <MDBCardText>{project.node.data.subtitle}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Zoom>
        </MDBCol>
      ))}
    </MDBRow>
  )
}

export default ProjectCards
