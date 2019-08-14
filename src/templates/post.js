import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import { MDBContainer } from "mdbreact"
import SliceZone from "../components/SliceZone"

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Layout>
      <SEO title={data.title.text} />
      <PageHero title={data.title.text} subtitle={data.description.text} />

      <MDBContainer>
        <h1>{data.date}</h1>
        <SliceZone allSlices={data.body} />
      </MDBContainer>
      {/* <div dangerouslySetInnerHTML={{ __html: data.body.primary.text.html }} /> */}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      type
      data {
        description
        title {
          text
        }
        date
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
