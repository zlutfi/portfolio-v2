import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBFooter } from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { PropTypes } from "prop-types"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     prismicFooter {
  //       data {
  //         copyright
  //         powered_by_title
  //         powered_by {
  //           link {
  //             url
  //             target
  //           }
  //           image {
  //             url
  //             alt
  //           }
  //         }
  //       }
  //     }
  //     prismicMenu(data: { name: { eq: "Footer Menu" } }) {
  //       data {
  //         menu_links {
  //           label {
  //             text
  //           }
  //           link {
  //             link_type
  //             type
  //             url
  //             id
  //           }
  //           partially_active
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <MDBFooter className="font-small">
        {/* <MDBContainer className="pb-3 pt-5"></MDBContainer> */}
        <div className="footer-copyright text-center py-3">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                Built with ♥ and powered by{" "}
                <OutboundLink
                  href="https://gatsby.org
                "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Gatsby"
                >
                  Gatsby
                </OutboundLink>
                ,{" "}
                <OutboundLink
                  href="https://prismic.io
                "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Prismic"
                >
                  Prismic
                </OutboundLink>{" "}
                and{" "}
                <OutboundLink
                  href="https://netlify.com
                "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Netlify"
                >
                  Netlify
                </OutboundLink>{" "}
                - &copy; &nbsp;
                <strong>{new Date().getFullYear()}</strong> Z Lutfi. All Rights
                Reserved.
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer

Footer.propTypes = {
  data: PropTypes.shape({
    prismicFooter: PropTypes.shape({
      data: PropTypes.shape({
        powered_by: PropTypes.shape({
          link: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
          image: PropTypes.shape({
            alt: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          }),
          copyright: PropTypes.string.isRequired,
          powered_by_title: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
}
