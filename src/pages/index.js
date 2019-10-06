import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Capabilities,
  Posts,
  Projects,
  Hero,
  Contact,
  Technology,
  Skills,
} from "../components/slices"

// Render homepage slices only if trigged via content management system
export class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "hero":
          return <Hero key={s.id} input={s} />
        case "capabilities":
          return <Capabilities key={s.id} input={s} />
        case "posts":
          return <Posts key={s.id} input={s} />
        case "projects":
          return <Projects key={s.id} input={s} />
        case "contact":
          return <Contact key={s.id} input={s} />
        case "skills":
          return <Skills key={s.id} input={s} />
        case "technology":
          return <Technology key={s.id} input={s} />

        default:
          return null
      }
    })
    return <content>{slice}</content>
  }
}
// Check to make sure data array is available
SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}

// Render the homepage
export default class Index extends Component {
  render() {
    const {
      data: { homepage },
    } = this.props
    return (
      <>
        <Layout>
          <SEO title={homepage.data.title} />

          <SliceZone allSlices={homepage.data.body} />
        </Layout>
      </>
    )
  }
}
// Check to make sure these prop types are available
Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}
// Query this data for all slices and page content
export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title
        body {
          ... on PrismicHomepageBodyContact {
            id
            slice_type
            primary {
              contact_section_title {
                text
                html
              }
              contact_section_subtitle {
                text
                html
              }
            }
          }
          ... on PrismicHomepageBodySkills {
            id
            slice_type
            primary {
              skills_section_title {
                text
                html
              }
              skills_section_subtitle {
                text
                html
              }
            }
            items {
              skill_title {
                text
                html
              }
              skill_icon_color
              skill_icon
              skill_content {
                text
                html
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
          ... on PrismicHomepageBodyTechnology {
            slice_type
            primary {
              technology_section_title {
                text
                html
              }
              technology_section_subtitle {
                text
                html
              }
            }
            items {
              technology_title {
                text
                html
              }
              technology_icon_color
              technology_icon
              technology_content {
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
                    ) # duotone: {
                    #   highlight: "#0a33ff"
                    #   shadow: "#15224a"
                    #   opacity: 100
                    # }
                    {
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
          # ... on PrismicHomepageBodyText {
          #   id
          #   slice_type
          #   primary {
          #     text {
          #       text
          #       html
          #     }
          #   }
          # }
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
