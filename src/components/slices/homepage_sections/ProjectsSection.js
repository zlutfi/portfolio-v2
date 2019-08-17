import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from "mdbreact"

export default class ProjectsSection extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow size="12" className="py-5">
          <MDBCol>
            <h2 className="text-center font-weight-bold">
              {input.primary.featured_projects_title.text}
            </h2>
            <hr className="heading-hr" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5">
          {input.items.map(project => (
            <MDBCol key={project.id} size="6" md="4">
              <Link to={project.featured_project.document.url}>
                <MDBView hover zoom>
                  <Img
                    fluid={
                      project.featured_project.document.data.thumbnail.localFile
                        .childImageSharp.fluid
                    }
                    alt={project.featured_project.document.data.thumbnail.alt}
                  />
                  <MDBMask className="flex-center" overlay="stylish-strong">
                    <h5 className="white-text font-weight-bold">
                      {project.featured_project.document.data.title}
                    </h5>
                  </MDBMask>
                </MDBView>
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    )
  }
}

ProjectsSection.propTypes = {
  input: PropTypes.array.isRequired,
}
