import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default class PostsSection extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow size="12" className="py-5">
          <MDBCol>
            <h2 className="text-center font-weight-bold">
              {input.primary.featured_posts_title.text}
            </h2>
            <hr className="heading-hr" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5" key={input.id}>
          {input.items.map((post, index) => (
            <MDBCol key={index} size="6" md="4">
              <Link to={post.featured_post.document.url}>
                <Img
                  fluid={
                    post.featured_post.document.data.thumbnail.localFile
                      .childImageSharp.fluid
                  }
                  alt={post.featured_post.document.data.thumbnail.alt}
                />
              </Link>

              {post.featured_post.document.data.title}
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    )
  }
}

PostsSection.propTypes = {
  input: PropTypes.object.isRequired,
}
