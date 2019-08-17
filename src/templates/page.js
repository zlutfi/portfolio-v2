import React from "react"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import SliceZone from "../components/SliceZone"

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <Layout>
      <SEO title={data.title} />
      <PageHeader title={data.title} subtitle={data.subtitle} />

      <MDBContainer>
        <SliceZone allSlices={data.body} />
      </MDBContainer>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      type
      data {
        title
        subtitle
        body {
          ... on PrismicPageBodyText {
            id
            slice_type
            primary {
              text {
                text
                html
              }
            }
          }
          ... on PrismicPageBodyQuote {
            id
            slice_type
            primary {
              name_of_the_author {
                text
              }
              quote {
                text
              }
              portrait_author {
                localFile {
                  childImageSharp {
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed_withWebp
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
