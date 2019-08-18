import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBBadge,
} from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"

const Blog = ({ data }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    <PageHeader
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
    />
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBRow>
            {data.allPrismicPost.edges.map((post, index) => (
              <MDBCol size="12" md="6" lg="4" className="mb-5" key={index}>
                <MDBCard>
                  <Link to={post.node.url}>
                    <Img
                      fluid={
                        post.node.data.hero.localFile.childImageSharp.fluid
                      }
                      alt={post.node.data.hero.alt}
                    />
                  </Link>
                  <MDBCardBody>
                    <MDBCardTitle />
                    <MDBCardTitle tag="h5">{post.node.data.title}</MDBCardTitle>
                    <MDBCardText>{post.node.data.description}</MDBCardText>
                    <MDBCardText>
                      <Link to={post.node.url}>
                        Read More{" "}
                        <MDBIcon icon="caret-right" className="ml-2" />
                      </Link>
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    {post.node.data.date}{" "}
                    <MDBBadge tag="span" color="primary" className="ml-2">
                      Category
                    </MDBBadge>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default Blog

export const blogPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "blog" }) {
      uid
      id
      type
      data {
        title
        subtitle
      }
    }
    allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          id
          url
          type
          data {
            title
            description
            hero {
              alt
              localFile {
                childImageSharp {
                  fluid(cropFocus: CENTER, maxHeight: 200, maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            date(formatString: "MM.DD.YYYY")
            categories {
              category {
                slug
              }
            }
            body {
              ... on PrismicPostBodyImage {
                id
                slice_type
                primary {
                  image {
                    localFile {
                      childImageSharp {
                        fixed {
                          ...GatsbyImageSharpFixed_withWebp
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicPostBodyText {
                id
                slice_type
                primary {
                  text {
                    html
                  }
                }
              }
              ... on PrismicPostBodyQuote {
                id
                slice_type
                primary {
                  quote {
                    text
                  }
                }
              }
              ... on PrismicPostBodyCodeBlock {
                id
                slice_type
                primary {
                  code_block {
                    html
                    text
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
