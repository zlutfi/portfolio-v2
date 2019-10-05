import React, { Component } from "react"
import PropTypes from "prop-types"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"

export default class SwiperCarousel extends Component {
  render() {
    const { input } = this.props
    const params = {
      slidesPerView: "auto",
      spaceBetween: 20,
      shouldSwiperUpdate: true,
      slideClass: "slide",
      rebuildOnUpdate: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: "auto",
          spaceBetween: 40,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
        640: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        320: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
      },
    }
    return (
      <>
        <h2 className="font-weight-bold mt-5 text-center">
          {input.primary.carousel_title.text}
        </h2>
        <Swiper {...params}>
          {/* Render slides */}
          {input.items.map((slide, index) => (
            <div key={index}>
              <Img
                className="d-block w-100 z-depth-1"
                x
                fluid={slide.slide_image.localFile.childImageSharp.fluid}
                alt={slide.slide_image.alt}
              />
              <p>{slide.slide_caption.text}</p>
            </div>
          ))}
        </Swiper>
      </>
    )
  }
}

SwiperCarousel.propTypes = {
  input: PropTypes.object.isRequired,
}
