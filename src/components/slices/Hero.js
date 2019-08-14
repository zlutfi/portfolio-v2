import React from "react"

import BackgroundImage from "gatsby-background-image"

// import { Img } from "gatsby-image"

const Hero = ({ slice }) => (
  // <MDBView>
  //   <img
  //     src={slice.primary.hero_background_image.url}
  //     className="img-fluid"
  //     alt="alt text"
  //   />
  // </MDBView>
  <BackgroundImage
    fluid={slice.primary.hero_background_imageSharp.childImageSharp.fluid}
  ></BackgroundImage>
)

export default Hero
