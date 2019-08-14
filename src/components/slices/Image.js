import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = ({ input }) => (
  <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
