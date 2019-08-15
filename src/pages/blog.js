import React from "react"
import { graphql, Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"

const Blog = ({ data }) => (
  <Layout>
    <SEO title={data.prismicStaticPage.data.title} />
    <PageHero
      title={data.prismicStaticPage.data.title}
      subtitle={data.prismicStaticPage.data.subtitle}
    />
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          {data.allPrismicPost.edges.map(post => (
            <li key={post.node.id}>
              <Link to={post.node.url}>{post.node.data.title}</Link> -{" "}
              {post.node.data.date}
            </li>
          ))}
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
            date(formatString: "DD.MM.YYYY")
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
