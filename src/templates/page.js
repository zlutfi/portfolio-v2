import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import SliceZone from "../components/SliceZone"

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <Layout>
      <SEO title={data.title.text} />
      <PageHero title={data.title.text} subtitle={data.description.text} />

      <SliceZone allSlices={data.body} />
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
        title {
          html
          text
        }
        description {
          text
          html
        }
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
