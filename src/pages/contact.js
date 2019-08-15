import React from "react"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import ContactForm from "../components/ContactForm"

const Contact = ({ data }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    <PageHero
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
    />
    <MDBContainer>
      <ContactForm />
    </MDBContainer>
  </Layout>
)

export default Contact

export const contactPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "contact" }) {
      uid
      id
      type
      data {
        title
        subtitle
      }
    }
  }
`
