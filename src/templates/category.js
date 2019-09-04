import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDBContainer } from "mdbreact"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import Filter from "../components/project/filter"
import Cards from "../components/project/cards"

const Category = ({ data, pageContext }) => {
  const category = data.prismicCategory.data
  const hero = data.prismicHomepageBodyHero
  const menu = data.allPrismicCategory.edges
  const cards = data.allPrismicProject.edges
  return (
    <>
      <Layout>
        <SEO title={category.title} />
        <PageHeader
          title={category.title}
          background={hero.primary.background.localFile.childImageSharp.fluid}
        />
        <MDBContainer>
          <Filter input={menu} />
          <Cards input={cards} />
        </MDBContainer>
      </Layout>
    </>
  )
}

export default Category

Category.propTypes = {
  data: PropTypes.shape({
    prismicCategory: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      url: PropTypes.string.isRequired,
      uid: PropTypes.string.isRequired,
    }),
    prismicHomepageBodyHero: PropTypes.shape({
      primary: PropTypes.shape({
        background: PropTypes.shape({
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.object.isRequired,
          }),
        }),
      }),
    }),
    allPrismicCategory: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    allPrismicProject: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const categoryQuery = graphql`
  query CategoryBySlug($uid: String!, $title: String!) {
    prismicCategory(uid: { eq: $uid }) {
      data {
        title
      }
      url
      uid
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
    allPrismicCategory(sort: { fields: data___title }) {
      edges {
        node {
          uid
          data {
            title
          }
          url
        }
      }
    }
    allPrismicProject(filter: { tags: { eq: $title } }) {
      edges {
        node {
          id
          tags
          url
          uid
          data {
            title {
              text
            }
            category {
              tags
            }
            thumbnail {
              alt
              localFile {
                childImageSharp {
                  fluid(cropFocus: CENTER, maxHeight: 450, maxWidth: 600) {
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
`
