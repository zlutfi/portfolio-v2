import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withiepolyfill"
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact"

export default class Carousel extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <h2 className="font-weight-bold mt-5">
          {input.primary.carousel_title.text}
        </h2>
        <MDBCarousel
          activeItem={input.primary.active_slide}
          length={input.items.length}
          showControls={true}
          showIndicators={true}
          className="py-5"
        >
          <MDBCarouselInner>
            {input.items.map((slide, index) => (
              <MDBCarouselItem itemId={index + 1} key={index}>
                <MDBView>
                  <Img
                    className="d-block w-100 z-depth-1"
                    fluid={slide.slide_image.localFile.childImageSharp.fluid}
                    alt={slide.slide_image.alt}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive white-text">
                    {slide.slide_title.text}
                  </h3>
                  <p>{slide.slide_caption.text}</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </>
    )
  }
}

Carousel.propTypes = {
  input: PropTypes.object.isRequired,
}
