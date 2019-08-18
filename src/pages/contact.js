import React from "react"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/ContactForm"
import PropTypes from "prop-types"

const Contact = ({ data = this.props }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    <PageHeader
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
    />
    <MDBContainer>
      <ContactForm />
    </MDBContainer>
  </Layout>
)

export default Contact

Contact.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const contactPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "contact" }) {
      data {
        title
        subtitle
      }
    }
  }
`
