import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  // MDBCard,
  // MDBCardBody,
  MDBBtn,
  // MDBCardTitle,
  // MDBCardText,
  // MDBBadge,
  MDBMask,
} from "mdbreact"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import posed from "react-pose"
// import Zoom from "react-reveal/Zoom"
import SectionTitle from "../../section-title"

// Animations for cards on hover
// const Animate = posed.div({
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

const Projects = ({ input }) => (
  <>
    <section>
      <MDBContainer fluid className="py-4 py-md-5 mx-auto">
        {/* Section Header */}
        {/* <MDBContainer className="mt-n5 mx-auto text-center"> */}
        {/* Title section */}
        <SectionTitle
          title={input.primary.featured_projects_title.text}
          subtitle={input.primary.featured_projects_subtitle.html}
        />

        {/* Project Cards */}
        <MDBRow className="mb-0 mx-auto">
          {input.items.map((project, index) => (
            <MDBCol size="12" md="4" className="mb-4" key={index} tag="article">
              {/* <MDBCard> */}
              {/* <Animate> */}
              <Link
                to={project.featured_project.document.url}
                alt="View Project"
                title="View Project"
              >
                <MDBView hover zoom>
                  <Img
                    fluid={
                      project.featured_project.document.data.thumbnail.localFile
                        .childImageSharp.fluid
                    }
                    alt={project.featured_project.document.data.thumbnail.alt}
                  />
                  <MDBMask className="flex-center" overlay="stylish-strong">
                    <MDBRow className="text-center">
                      <MDBCol size="12">
                        <h2 className="white-text h2-responsive">
                          {project.featured_project.document.data.title.text}
                        </h2>
                      </MDBCol>

                      <MDBCol size="12">
                        <MDBBtn size="sm" color="primary">
                          <FontAwesomeIcon
                            icon="folder-open"
                            className="text-white mr-2"
                          />{" "}
                          View Project
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBMask>
                </MDBView>
              </Link>
              {/* </Animate> */}
              {/* <MDBCardBody>
                      <Link
                        to={project.featured_project.document.url}
                        name="View Project"
                        alt="View Project"
                        title="View Project"
                      ></Link>
                      <MDBCardTitle className="font-weight-bold" tag="div">
                        <MDBRow between>
                          <MDBCol size="auto">
                            {project.featured_project.document.data.title.text}
                          </MDBCol>
                        </MDBRow>
                      </MDBCardTitle>
                      <MDBCardText>
                        {project.featured_project.document.data.subtitle}
                      </MDBCardText>
                      <MDBRow between>
                        <MDBCol size="auto">
                          <MDBCardText>
                            <MDBIcon icon="github" fab className="mr-2" />
                            Source Code
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="auto">
                          <MDBCardText>
                            <MDBIcon icon="folder-open" className="mr-2" />
                            View Project
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody> */}
              {/* </MDBCard> */}
            </MDBCol>
          ))}
        </MDBRow>
        {/* CTA Section */}
        {/* <MDBRow className="py-5 justify-content-center">
              <Link to="/projects" title="View Projects">
                <MDBBtn color="elegant" tag="span" className="btn-rounded">
                  <MDBIcon icon="folder-open" className="mr-2" />
                  View more projects
                </MDBBtn>
              </Link>
            </MDBRow> */}
      </MDBContainer>
    </section>
  </>
)

export default Projects

Projects.propTypes = {
  input: PropTypes.object.isRequired,
}
