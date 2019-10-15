import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Capabilities,
  Projects,
  Hero,
  Contact,
  Tech,
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
        case "projects":
          return <Projects key={s.id} input={s} />
        case "contact":
          return <Contact key={s.id} input={s} />
        case "skills":
          return <Skills key={s.id} input={s} />
        case "technology":
          return <Tech key={s.id} input={s} />

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
const Index = ({ data }) => (
  <>
    <Layout>
      <SEO title={data.prismicHomepage.data.title} />
      <SliceZone allSlices={data.prismicHomepage.data.body} />
    </Layout>
  </>
)

export default Index

// Check to make sure these prop types are available
Index.propTypes = {
  data: PropTypes.shape({
    prismicHomepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}
// Query this data for all slices and page content
export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
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
          # ... on PrismicHomepageBodyCapabilities {
          #   id
          #   slice_type
          #   primary {
          #     section_title
          #     section_subtitle {
          #       text
          #       html
          #     }
          #     section_image {
          #       localFile {
          #         childImageSharp {
          #           fluid(quality: 90) {
          #             ...GatsbyImageSharpFluid_withWebp
          #           }
          #         }
          #       }
          #     }
          #   }
          #   items {
          #     card_title {
          #       html
          #       text
          #     }
          #     card_description {
          #       html
          #       text
          #     }
          #     card_icon
          #     card_content {
          #       text
          #       html
          #     }
          #   }
          # }
          ... on PrismicHomepageBodyTechnology {
            id
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
              technology_section_image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
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
                      cropFocus: CENTER # duotone: { #   highlight: "#15224a" #   shadow: "#000000"
                    ) #   opacity: 80
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
