import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SliceOMatic from "../components/sliceomatic"

class Index extends Component {
  render() {
    const {
      data: { homepage },
    } = this.props
    return (
      <>
        <Layout>
          <SEO title={homepage.data.title} />

          <SliceOMatic allSlices={homepage.data.body} />
        </Layout>
      </>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title
        body {
          ... on PrismicHomepageBodyContactCta {
            id
            slice_type
            primary {
              contact_title {
                text
                html
              }
              contact_subtitle {
                text
                html
              }
              contact_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              contact_background {
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
          ... on PrismicHomepageBodyCapabilities {
            id
            slice_type
            primary {
              section_title
              section_subtitle {
                text
                html
              }
              section_image {
                localFile {
                  childImageSharp {
                    fluid(quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            items {
              card_title {
                html
                text
              }
              card_description {
                html
                text
              }
              card_icon
              card_content {
                text
                html
              }
            }
          }
          ... on PrismicHomepageBodyHero {
            id
            slice_type
            primary {
              title {
                text
                html
              }
              button_1_title
              button_1_link {
                type
                url
                uid
              }
              button_2_title
              button_2_link {
                type
                url
                uid
              }
              background {
                alt
                localFile {
                  childImageSharp {
                    fluid(
                      maxWidth: 1920
                      maxHeight: 1080
                      quality: 90
                      duotone: {
                        highlight: "#0a33ff"
                        shadow: "#15224a"
                        opacity: 100
                      }
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicHomepageBodyDivider {
            id
            slice_type
          }
          ... on PrismicHomepageBodyText {
            id
            slice_type
            primary {
              text {
                text
                html
              }
            }
          }
          ... on PrismicHomepageBodyPosts {
            id
            slice_type
            primary {
              featured_posts_title {
                text
                html
              }
              featured_posts_subtitle {
                text
                html
              }
            }
            items {
              featured_post {
                document {
                  ... on PrismicPost {
                    id
                    url
                    data {
                      title {
                        text
                        html
                      }
                      description
                      date
                      hero {
                        alt
                        localFile {
                          childImageSharp {
                            fluid(
                              maxHeight: 200
                              maxWidth: 400
                              cropFocus: CENTER
                            ) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                          }
                        }
                      }
                      thumbnail {
                        alt
                        localFile {
                          childImageSharp {
                            fluid(
                              maxHeight: 200
                              maxWidth: 400
                              cropFocus: CENTER
                            ) {
                              ...GatsbyImageSharpFluid_withWebp
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
          ... on PrismicHomepageBodyProjects {
            id
            slice_type
            primary {
              featured_projects_title {
                text
                html
              }
              featured_projects_subtitle {
                text
                html
              }
            }
            items {
              featured_project {
                document {
                  ... on PrismicProject {
                    id
                    url
                    tags
                    data {
                      title {
                        text
                        html
                      }
                      subtitle
                      category {
                        slug
                      }
                      hero {
                        alt
                        localFile {
                          childImageSharp {
                            fluid(
                              maxHeight: 200
                              maxWidth: 400
                              cropFocus: CENTER
                            ) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                          }
                        }
                      }
                      thumbnail {
                        alt
                        localFile {
                          childImageSharp {
                            fluid(
                              maxHeight: 450
                              maxWidth: 600
                              cropFocus: CENTER
                            ) {
                              ...GatsbyImageSharpFluid_withWebp
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
        }
      }
    }
  }
`
