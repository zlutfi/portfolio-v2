import React from "react"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"

const SwiperCarousel = ({ img1 = "img1", img2 = "img2", img3 = "img3" }) => {
  const params = {
    slidesPerView: "auto",
    //centeredSlides: true,
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
        spaceBetween: -40,
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
    <Swiper {...params}>
      <div>
        <Img fluid={img1} alt="" className="img-fluid" />
      </div>
      <div>
        <Img fluid={img2} alt="" className="img-fluid" />
      </div>
      <div>
        <Img fluid={img3} alt="" className="img-fluid" />
      </div>
    </Swiper>
  )
}
export default SwiperCarousel
