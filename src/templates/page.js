import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import { MDBContainer } from "mdbreact"

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <Layout>
      <SEO title={data.title.text} />
      <PageHero title={data.title.text} subtitle={data.description.text} />

      <MDBContainer>
        <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
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
        title {
          text
        }
        body {
          html
        }
        description {
          text
        }
      }
    }
  }
`
