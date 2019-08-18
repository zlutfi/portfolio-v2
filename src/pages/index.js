import React, { Component } from "react"
import PropTypes from "prop-types"
// import styled from '@emotion/styled'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSliceZone from "../components/HomeSliceZone"

class Index extends Component {
  render() {
    const {
      data: { homepage },
    } = this.props
    return (
      <Layout>
        <SEO title={homepage.data.title} />
        <HomeSliceZone allSlices={homepage.data.body} />
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
              contact_background {
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
                      src
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
            }
            items {
              card_title {
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
              button_title
              button_link {
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
                        highlight: "#007bff"
                        shadow: "#202932"
                        opacity: 90
                      }
                    ) {
                      src
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
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
            }
            items {
              featured_post {
                document {
                  ... on PrismicPost {
                    id
                    url
                    data {
                      title
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
            }
            items {
              featured_project {
                document {
                  ... on PrismicProject {
                    id
                    url
                    data {
                      title
                      subtitle
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
        }
      }
    }
  }
`
