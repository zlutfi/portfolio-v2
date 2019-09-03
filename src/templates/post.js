import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHeader from "../components/PostHeader"
import PostLinks from "../components/PostLinks"
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact"
import SliceZone from "../components/SliceZone"
import PropTypes from "prop-types"

const Post = ({ data, pageContext }) => {
  const previous = pageContext.prev
  const next = pageContext.next
  const post = data.prismicPost.data
  return (
    <>
      <Layout>
        <SEO title={post.title.text} />
        <PostHeader
          title={post.title.text}
          subtitle={post.description}
          background={post.hero.localFile.childImageSharp.fluid}
          bgColor="unique-color-dark"
        />
        <MDBContainer>
          <h5>{post.date}</h5>
          <SliceZone allSlices={post.body} />
          <MDBRow>
            <MDBCol className="py-5">
              <Link to="/blog">
                <MDBBtn tag="span" color="primary">
                  <MDBIcon icon="caret-left" className="mr-2" />
                  Return to Blog
                </MDBBtn>
              </Link>
              <PostLinks previous={previous} next={next} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.object.isRequired,
        description: PropTypes.string.isRequired,
        hero: PropTypes.object.isRequired,
        body: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      data {
        description
        title {
          html
          text
        }
        date
        hero {
          alt
          localFile {
            childImageSharp {
              fluid(
                cropFocus: CENTER
                maxHeight: 600
                maxWidth: 1200
                quality: 90
              ) # duotone: {
              #   highlight: "#4fa72b"
              #   shadow: "#000000"
              #   opacity: 90
              # }
              {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(cropFocus: CENTER, maxHeight: 600, maxWidth: 1200) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
