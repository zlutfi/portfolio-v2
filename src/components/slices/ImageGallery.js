import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default class ImageGallery extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow key={input.id} className="py-5">
          {input.items.map((gallery, index) => (
            <MDBCol size="6" md="4" key={index}>
              <Img
                fluid={gallery.gallery_image.localFile.childImageSharp.fluid}
                alt={gallery.gallery_image.alt}
              />
              <p className="text-center py-3">{gallery.image_caption.text}</p>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    )
  }
}

ImageGallery.propTypes = {
  input: PropTypes.object.isRequired,
}
