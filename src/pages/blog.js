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
  MDBView,
} from "mdbreact"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import posed from "react-pose"
import Zoom from "react-reveal/Zoom"

// Animations for cards on hover

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.05)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
  },
})

const ImgWrapper = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
})

const Blog = ({ data }) => (
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
        <MDBRow>
          <MDBCol>
            <MDBRow>
              {data.allPrismicPost.edges.map((post, index) => (
                <MDBCol size="12" md="6" lg="4" className="mb-5" key={index}>
                  <Zoom delay={300 * index}>
                    <div style={{ height: "100%" }}>
                      <Box className="box" style={{ height: "100%" }}>
                        <MDBCard>
                          <Link to={post.node.url}>
                            <MDBView>
                              <ImgWrapper>
                                <Img
                                  fluid={
                                    post.node.data.hero.localFile
                                      .childImageSharp.fluid
                                  }
                                  alt={post.node.data.hero.alt}
                                />
                              </ImgWrapper>
                            </MDBView>
                          </Link>
                          <MDBCardBody>
                            <MDBCardTitle />
                            <MDBCardTitle tag="h5">
                              {post.node.data.title.text}
                            </MDBCardTitle>
                            <MDBCardText>
                              {post.node.data.description}
                            </MDBCardText>
                            <MDBCardText>
                              <Link to={post.node.url}>
                                Read More{" "}
                                <MDBIcon icon="caret-right" className="ml-2" />
                              </Link>
                            </MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter>
                            {post.node.data.date}{" "}
                            <MDBBadge
                              tag="span"
                              color="primary"
                              className="ml-2"
                            >
                              Category
                            </MDBBadge>
                          </MDBCardFooter>
                        </MDBCard>
                      </Box>
                    </div>
                  </Zoom>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  </>
)

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
    }),
    allPrismicPost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const blogPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "blog" }) {
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
            title {
              text
              html
            }
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
            date
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
    prismicHomepageBodyHero {
      primary {
        background {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 1920
                maxHeight: 1080
                quality: 90
                duotone: {
                  highlight: "#007bff"
                  shadow: "#15224a"
                  opacity: 90
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
