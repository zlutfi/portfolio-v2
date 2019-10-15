import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
// import ZoomImage from "../../components/ZoomImage"
// import Zoom from "react-reveal/Zoom"

export default class Gallery extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <MDBContainer>
          <MDBRow className="pt-5">
            <MDBCol>
              <h2 className="font-weight-bold">
                {input.primary.gallery_title.text}
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow key={input.id} className="py-5">
            {input.items.map((item, index) => (
              <MDBCol size="6" md="4" key={index}>
                {/* <ZoomImage
                  imageWidth={1200}
                  imageHeight={600}
                  src={gallery.gallery_image.localFile.childImageSharp.fluid.src}
                /> */}
                {/* <Zoom bottom delay={300 * index}> */}
                <Img
                  fluid={item.gallery_image.localFile.childImageSharp.fluid}
                  alt={item.gallery_image.alt}
                  className="rounded z-depth-1"
                />
                <p className="text-center py-3">{item.image_caption.text}</p>
                {/* </Zoom> */}
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

Gallery.propTypes = {
  input: PropTypes.object.isRequired,
}
