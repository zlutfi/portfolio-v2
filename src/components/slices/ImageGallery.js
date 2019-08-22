import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBRow, MDBCol } from "mdbreact"
// import ZoomImage from "../../components/ZoomImage"

export default class ImageGallery extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <MDBRow className="pt-5">
          <MDBCol>
            <h2 className="font-weight-bold">
              {input.primary.gallery_title.text}
            </h2>
          </MDBCol>
        </MDBRow>
        <MDBRow key={input.id} className="py-5">
          {input.items.map((gallery, index) => (
            <MDBCol size="6" md="4" key={index}>
              {/* <ZoomImage
                imageWidth={1200}
                imageHeight={600}
                src={gallery.gallery_image.localFile.childImageSharp.fluid.src}
              /> */}
              <Img
                fluid={gallery.gallery_image.localFile.childImageSharp.fluid}
                alt={gallery.gallery_image.alt}
              />
              <p className="text-center py-3">{gallery.image_caption.text}</p>
            </MDBCol>
          ))}
        </MDBRow>
      </>
    )
  }
}

ImageGallery.propTypes = {
  input: PropTypes.object.isRequired,
}
