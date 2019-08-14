import React, { Component } from "react"
import PropTypes from "prop-types"
// import styled from '@emotion/styled'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDBContainer } from "mdbreact"
// import website from '../../config/website'

// const Hero = styled.header`
//   background-color: ${props => props.theme.colors.greyLight};
//   display: flex;
//   align-items: center;
// `

// const HeroInner = styled(Wrapper)`
//   padding-top: 13rem;
//   padding-bottom: 13rem;
//   h1 {
//     margin-bottom: 2rem;
//   }
//   @media (max-width: ${props => props.theme.breakpoints.l}) {
//     padding-top: 10rem;
//     padding-bottom: 10rem;
//   }
//   @media (max-width: ${props => props.theme.breakpoints.m}) {
//     padding-top: 8rem;
//     padding-bottom: 8rem;
//   }
//   @media (max-width: ${props => props.theme.breakpoints.s}) {
//     padding-top: 6rem;
//     padding-bottom: 6rem;
//   }
// `

// const HeroText = styled.div`
//   font-size: 1.7rem;
//   line-height: 1.4;
//   margin-bottom: 2rem;
//   @media (max-width: ${props => props.theme.breakpoints.m}) {
//     font-size: 1.4rem;
//   }
//   @media (max-width: ${props => props.theme.breakpoints.s}) {
//     font-size: 1.25rem;
//   }
// `

// const hero = styled.ul`
//   list-style-type: none;
//   display: flex;
//   flex-wrap: wrap;
//   margin-left: 0;
//   font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
//     sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
//   li {
//     display: inline;
//     &:not([data-name='hero-entry-0']) {
//       margin-left: 2.5rem;
//       @media (max-width: ${props => props.theme.breakpoints.s}) {
//         margin-left: 1.75rem;
//       }
//     }
//     a {
//       font-style: normal;
//       color: ${props => props.theme.colors.greyDark};
//       font-size: 1.333rem;
//       font-weight: 600;
//       &:hover,
//       &:focus {
//         color: ${props => props.theme.colors.primary};
//         text-decoration: none;
//       }
//       @media (max-width: ${props => props.theme.breakpoints.s}) {
//         font-size: 1.2rem;
//       }
//     }
//   }
// `

// const ProjectListing = styled.ul`
//   list-style-type: none;
//   margin-left: 0;
//   margin-top: 4rem;
//   li {
//     margin-bottom: 1.45rem;
//     a {
//       font-size: 2.369rem;
//       font-style: normal;
//       color: ${props => props.theme.colors.black};
//       @media (max-width: ${props => props.theme.breakpoints.s}) {
//         font-size: 1.777rem;
//       }
//     }
//   }
// `

// const IndexWrapper = Wrapper.withComponent('main')

class Index extends Component {
  render() {
    const {
      data: { homepage, hero, posts, projects },
    } = this.props
    return (
      <Layout>
        {/* <Hero> */}
        <h1>{homepage.data.title.text}</h1>
        {/* <HeroText dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} /> */}
        <MDBContainer>
          {hero.nodes.map((s, index) => (
            <li data-name={`hero-entry-${index}`} key={s.primary.text.text}>
              <a href={s.primary.text.text}>{s.primary.text.text}</a>
            </li>
          ))}
        </MDBContainer>
        {/* </Hero> */}
        {/* <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}> */}
        <MDBContainer>
          <h2 style={{ marginTop: "4rem" }}>Recent posts</h2>
          {/* <Listing posts={posts.nodes} /> */}
          {/* {posts.nodes} */}
          {posts.nodes.map(post => (
            <li key={post.id}>
              <Link to={post.url}>{post.data.title.text}</Link>
            </li>
          ))}
        </MDBContainer>
        <MDBContainer>
          <h2 style={{ marginTop: "8rem" }}>Recent projects</h2>
          {projects.nodes.map(project => (
            <li key={project.id}>
              <Link to={project.url}>{project.data.title.text}</Link>
            </li>
          ))}
        </MDBContainer>
        {/* </IndexWrapper> */}
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
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
        title {
          text
        }
      }
    }
    hero: allPrismicHomepageBodyText {
      nodes {
        primary {
          text {
            text
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
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              slug
            }
          }
        }
      }
    }
    projects: allPrismicProject {
      nodes {
        id
        url
        type
        data {
          description {
            text
          }
          title {
            text
          }
        }
      }
    }
  }
`
