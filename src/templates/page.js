import React from "react"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import PropTypes from "prop-types"
import SliceZone from "../components/SliceZone"

const Page = ({ data: { prismicPage } } = this.props) => {
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

Page.propTypes = {
  data: PropTypes.shape({
    prismicPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        body: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
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
