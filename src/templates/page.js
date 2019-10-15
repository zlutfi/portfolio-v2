// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Header from "../components/header"
// import SliceOMatic from "../components/sliceomatic"
// import { MDBCard, MDBContainer } from "mdbreact"

// const Page = ({ data }) => {
//   const page = data.prismicPage.data
//   const homeHero = data.prismicHomepageBodyHero
//   return (
//     <>
//       <Layout>
//         <SEO title={page.title} />
//         {/* Page Header */}
//         <Header
//           title={page.title}
//           subtitle={page.subtitle}
//           background={
//             homeHero.primary.background.localFile.childImageSharp.fluid
//           }
//         />
//         <MDBContainer className="mt-n5">
//           <MDBCard>
//             {/* Page slices */}
//             <SliceOMatic allSlices={page.body} />
//           </MDBCard>
//         </MDBContainer>
//       </Layout>
//     </>
//   )
// }

// export default Page

// Page.propTypes = {
//   data: PropTypes.shape({
//     prismicPage: PropTypes.shape({
//       data: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         subtitle: PropTypes.string.isRequired,
//         body: PropTypes.array.isRequired,
//       }),
//     }),
//   }).isRequired,
// }

// export const pageQuery = graphql`
//   query PageBySlug($uid: String!) {
//     prismicPage(uid: { eq: $uid }) {
//       data {
//         title
//         subtitle
//         hero {
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1920, maxHeight: 1080, quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//               }
//             }
//           }
//         }
//         body {
//           ... on PrismicPageBodyText {
//             id
//             slice_type
//             primary {
//               section_title {
//                 text
//                 html
//               }
//               section_content {
//                 text
//                 html
//               }
//             }
//           }
//           ... on PrismicPageBodyTextWithImage {
//             id
//             slice_type
//             primary {
//               content {
//                 html
//                 text
//               }
//               card_title
//               card_content {
//                 text
//                 html
//               }
//               image {
//                 alt
//                 localFile {
//                   childImageSharp {
//                     fluid {
//                       ...GatsbyImageSharpFluid_withWebp
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           ... on PrismicPageBodyQuote {
//             id
//             slice_type
//             primary {
//               name_of_the_author {
//                 text
//               }
//               quote {
//                 text
//               }
//               portrait_author {
//                 localFile {
//                   childImageSharp {
//                     fixed(width: 100, height: 100) {
//                       ...GatsbyImageSharpFixed_withWebp
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     prismicHomepageBodyHero {
//       primary {
//         background {
//           localFile {
//             childImageSharp {
//               fluid(
//                 maxWidth: 1920
//                 maxHeight: 800
//                 quality: 90
//                 duotone: {
//                   highlight: "#0a33ff"
//                   shadow: "#15224a"
//                   opacity: 100
//                 }
//               ) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
