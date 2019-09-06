import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default class RelatedProjects extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow size="12" className="py-5">
          <MDBCol>
            <h2>Recent Projects</h2>
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5">
          {input.nodes.map(project => (
            <MDBCol key={project.id} size="6" md="4">
              <Link to={project.url}>
                <Img
                  fluid={project.data.hero.localFile.childImageSharp.fluid}
                  alt="alt text bruh"
                />
              </Link>
              <p className="pt-3 text-center">{project.data.title}</p>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      //   <MDBContainer>
      //     <MDBRow key={input.id} className="py-5">
      //       {input.items.map((projects, index) => (
      //         <MDBCol size="6" md="4">
      //           <Img
      //             key={index}
      //             fluid={projects.gallery_image.localFile.childImageSharp.fluid}
      //             alt={projects.gallery_image.alt}
      //           />
      //           <p key={index} className="text-center py-3">
      //             {projects.image_captions.text}
      //           </p>
      //         </MDBCol>
      //       ))}
      //     </MDBRow>
      //   </MDBContainer>
    )
  }
}

RelatedProjects.propTypes = {
  input: PropTypes.object.isRequired,
}
