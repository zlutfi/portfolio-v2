import React from "react"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import ContactForm from "../components/ContactForm"

const Contact = ({ data }) => (
  <Layout>
    <SEO title={data.prismicContact.data.title} />
    <PageHero
      title={data.prismicContact.data.title}
      subtitle={data.prismicContact.data.description}
    />
    <MDBContainer>
      <ContactForm />
    </MDBContainer>
  </Layout>
)

export default Contact

export const contactPageQuery = graphql`
  query {
    prismicContact {
      uid
      data {
        title
        description
      }
    }
  }
`
