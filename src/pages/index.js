import React, { Component } from "react"
import PropTypes from "prop-types"
// import styled from '@emotion/styled'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Hero from "../components/slices/Hero"
import Img from "gatsby-image"
import SEO from "../components/seo"
import ProjectsSection from "../components/slices/homepage_sections/ProjectsSection"
import PostsSection from "../components/slices/homepage_sections/PostsSection"
import SliceZone from "../components/SliceZone"

class Index extends Component {
  render() {
    const {
      data: { homepage, hero, posts, projects },
    } = this.props
    return (
      <Layout>
        <SEO title={homepage.data.title} />
        {hero.nodes.map((h, index) => (
          <div key={index}>
            <Hero input={h.primary} />
          </div>
        ))}
        {/* <SliceZone allSlices={homepage.body} /> */}

        {/* <MDBContainer>
          <h2 style={{ marginTop: "4rem" }}>Recent posts</h2>

          {posts.edges.map(post => (
            <li key={post.node.id}>
              <Link to={post.node.url}>{post.node.data.title}</Link>
            </li>
          ))}
        </MDBContainer> */}
        <PostsSection input={posts.nodes} />

        <ProjectsSection input={projects.nodes} />
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        // content: PropTypes.shape({
        //   html: PropTypes.string.isRequired,
        // }),
      }),
    }),
    hero: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title
      }
    }
    hero: allPrismicHomepageBodyHero {
      nodes {
        slice_type
        primary {
          title {
            text
            html
          }
          button_title
          button_link {
            type
            url
          }
          background {
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 1920
                  maxHeight: 1080
                  quality: 90
                  duotone: {
                    highlight: "#007bff"
                    shadow: "#202932"
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
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
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
          hero {
            localFile {
              childImageSharp {
                fluid(cropFocus: CENTER, maxHeight: 200, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
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
    projects: allPrismicProject {
      nodes {
        id
        type
        url
        data {
          subtitle
          title
          hero {
            localFile {
              childImageSharp {
                fluid(cropFocus: CENTER, maxHeight: 200, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          category {
            slug
          }
          body {
            ... on PrismicProjectBodyImageGallery {
              id
              slice_type
              items {
                gallery_image {
                  localFile {
                    childImageSharp {
                      fixed(height: 300, width: 300) {
                        ...GatsbyImageSharpFixed_withWebp
                      }
                    }
                  }
                  alt
                }
                image_caption {
                  text
                }
              }
            }
            ... on PrismicProjectBodyProjectInfo {
              id
              slice_type
              primary {
                project_link {
                  url
                  type
                  link_type
                }
                project_code_link {
                  url
                  type
                  link_type
                }
              }
            }
            ... on PrismicProjectBodyText {
              id
              slice_type
              primary {
                text {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`
