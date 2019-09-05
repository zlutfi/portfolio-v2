import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withiepolyfill"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default class RelatedPosts extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow key={input.id} className="py-5">
          {input.items.map((posts, index) => (
            <MDBCol size="6" md="4">
              <Img
                key={index}
                fluid={posts.gallery_image.localFile.childImageSharp.fluid}
                alt={posts.gallery_image.alt}
              />
              <p key={index} className="text-center py-3">
                {posts.image_captions.text}
              </p>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    )
  }
}

RelatedPosts.propTypes = {
  input: PropTypes.object.isRequired,
}
