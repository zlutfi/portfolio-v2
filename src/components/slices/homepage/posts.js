import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image/withiepolyfill"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact"

export default class Posts extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer tag="section">
        <MDBRow size="12" className="py-5 text-center">
          <MDBCol>
            <h1 className="font-weight-bold">
              {input.primary.featured_posts_title.text}
            </h1>
            <hr className="heading-hr" />
            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: input.primary.featured_posts_subtitle.html,
              }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5" key={input.id}>
          {input.items.map((post, index) => (
            <MDBCol size="12" md="6" lg="4" className="mb-4" key={index}>
              <MDBCard className="card-zoom">
                <Link to={post.featured_post.document.url}>
                  <Img
                    fluid={
                      post.featured_post.document.data.thumbnail.localFile
                        .childImageSharp.fluid
                    }
                    alt={post.featured_post.document.data.thumbnail.alt}
                  />
                </Link>
                <MDBCardBody>
                  <Link
                    to={post.featured_post.document.url}
                    name="View post"
                    alt="View post"
                  >
                    <div className="card-btn">
                      <MDBBtn color="primary" tag="span">
                        <MDBIcon icon="quote-right" />
                      </MDBBtn>
                    </div>
                  </Link>
                  <MDBCardTitle className="font-weight-bold" tag="p">
                    {post.featured_post.document.data.title.text}
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    )
  }
}

Posts.propTypes = {
  input: PropTypes.object.isRequired,
}
