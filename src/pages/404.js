import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact"
import PageHeader from "../components/PageHeader"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteMap from "../components/SiteMap"

function NotFoundPage({ data = this.props }) {
  return (
    <>
      <Layout>
        <SEO title={data.prismicStaticPage.data.title} />
        <PageHeader
          title={data.prismicStaticPage.data.title}
          subtitle={data.prismicStaticPage.data.subtitle}
          background={
            data.prismicHomepageBodyHero.primary.background.localFile
              .childImageSharp.fluid
          }
        />
        <MDBContainer>
          <MDBRow className="pt-5 mt-5">
            <MDBCol size="12" className="text-center py-5 my-5">
              <MDBAnimation type="fadeInUp" delay="0.1s">
                <h1 className="font-weight-bold text-primary display-2">
                  {data.prismicStaticPage.data.title}
                </h1>
              </MDBAnimation>
              <MDBAnimation type="fadeInUp" delay="0.3s">
                <p className="lead">{data.prismicStaticPage.data.subtitle}</p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol className="text-center pb-5">
              <MDBAnimation type="fadeInUp" delay="0.5s">
                <Link to="/">
                  <MDBBtn color="elegant">
                    <MDBIcon icon="caret-left" className="mr-2" />
                    Return to Home
                  </MDBBtn>
                </Link>
              </MDBAnimation>
            </MDBCol>
            <MDBCol>
              <SiteMap input={data} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  )
}
export default NotFoundPage

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const NotFoundPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "404" }) {
      data {
        title
        subtitle
      }
    }
    allPrismicPage {
      edges {
        node {
          url
          id
          type
          data {
            title
          }
        }
      }
    }
    allPrismicStaticPage {
      edges {
        node {
          url
          id
          type
          data {
            title
          }
        }
      }
    }
    prismicHomepageBodyHero {
      primary {
        background {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) # duotone: {
              #   highlight: "#ffffff"
              #   shadow: "#15224a"
              #   opacity: 90
              # }
              {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
