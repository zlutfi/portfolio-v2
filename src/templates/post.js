import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostHeader from "../components/PostHeader"
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact"
import SliceZone from "../components/SliceZone"
import PropTypes from "prop-types"

const Post = ({ data: { prismicPost } } = this.props) => {
  const { data } = prismicPost
  return (
    <Layout>
      <SEO title={data.title} />
      <PostHeader
        title={data.title}
        subtitle={data.description}
        background={data.hero.localFile.childImageSharp.fluid}
      />

      <MDBContainer>
        <h5>{data.date}</h5>
        <SliceZone allSlices={data.body} />
        <MDBRow>
          <MDBCol className="py-5">
            <Link to="/blog">
              <MDBBtn tag="span" color="primary">
                <MDBIcon icon="caret-left" className="mr-2" />
                Return to Blog
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicProject: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        hero: PropTypes.object.isRequired,
        body: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      type
      data {
        description
        title
        date
        hero {
          alt
          localFile {
            childImageSharp {
              fluid(cropFocus: CENTER, maxHeight: 600, maxWidth: 1200) {
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
