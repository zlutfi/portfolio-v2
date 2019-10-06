import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/post/header"
import PrevNext from "../components/post/prevNext"
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact"
import SliceOMatic from "../components/sliceomatic"
import PropTypes from "prop-types"

const Post = ({ data, pageContext }) => {
  const previous = pageContext.prev
  const next = pageContext.next
  const post = data.prismicPost.data
  return (
    <>
      <Layout>
        <SEO title={post.title.text} />
        <Header
          title={post.title.text}
          subtitle={post.description}
          background={post.hero.localFile.childImageSharp.fluid}
          bgColor="unique-color-dark"
        />
        <MDBContainer>
          <h5>{post.date}</h5>
          <SliceOMatic allSlices={post.body} />
          <MDBRow>
            <MDBCol className="py-5">
              <Link to="/blog">
                <MDBBtn tag="span" color="primary">
                  <MDBIcon icon="caret-left" className="mr-2" />
                  Return to Blog
                </MDBBtn>
              </Link>
              <PrevNext previous={previous} next={next} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  )
}

export default Post

// Post.propTypes = {
//   data: PropTypes.shape({
//     prismicPost: PropTypes.shape({
//       data: PropTypes.shape({
//         title: PropTypes.object.isRequired,
//         description: PropTypes.string.isRequired,
//         hero: PropTypes.object.isRequired,
//         body: PropTypes.array.isRequired,
//       }),
//     }),
//   }).isRequired,
// }

// export const pageQuery = graphql`
//   query PostBySlug($uid: String!) {
//     prismicPost(uid: { eq: $uid }) {
//       data {
//         description
//         title {
//           html
//           text
//         }
//         date
//         hero {
//           alt
//           localFile {
//             childImageSharp {
//               fluid(
//                 cropFocus: CENTER
//                 maxHeight: 600
//                 maxWidth: 1200
//                 quality: 90
//               ) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//         body {
//           ... on PrismicPostBodyText {
//             slice_type
//             id
//             primary {
//               text {
//                 html
//               }
//             }
//           }
//           ... on PrismicPostBodyQuote {
//             slice_type
//             id
//             primary {
//               quote {
//                 html
//               }
//             }
//           }
//           ... on PrismicPostBodyCodeBlock {
//             slice_type
//             id
//             primary {
//               code_block {
//                 html
//               }
//             }
//           }
//           ... on PrismicPostBodyImage {
//             slice_type
//             id
//             primary {
//               image {
//                 localFile {
//                   childImageSharp {
//                     fluid(cropFocus: CENTER, maxHeight: 600, maxWidth: 1200) {
//                       ...GatsbyImageSharpFluid_withWebp
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
