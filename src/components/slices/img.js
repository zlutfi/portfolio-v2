import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withiepolyfill"

const Image = ({ input }) => (
  <Img
    fluid={input.primary.image.localFile.childImageSharp.fluid}
    className="rounded my-5"
  />
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
