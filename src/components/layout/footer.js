import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
  // MDBBtn,
  // MDBIcon,
} from "mdbreact"
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
        <MDBContainer className="pb-3 pt-5">
          <MDBRow>
            <MDBCol size="6" className="mx-auto">
              <h5 className="text-uppercase text-primary font-weight-bold text-center">
                About
              </h5>
              <p className="grey-text text-center">
                I'm Z, a web developer and designer. My passion for technology
                keeps me in a perpetual state of motion, so I am always learning
                and experimenting with new technologies and platforms.{" "}
                <Link to="/about" className="text-dark">
                  Learn more &#8594;
                </Link>
              </p>
            </MDBCol>
            {/* <MDBCol>
              <h5 className="text-uppercase text-primary font-weight-bold">
                Connect
              </h5>
              <div className="pb-5">
                <MDBIcon
                  fab
                  icon="github"
                  size="2x"
                  className="mr-3 text-dark"
                />
                <MDBIcon
                  fab
                  icon="twitter"
                  size="2x"
                  className="mr-3 text-dark"
                />
                <MDBIcon
                  fab
                  icon="linkedin"
                  size="2x"
                  className="mr-3 text-dark"
                />
              </div>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                Built by <strong>Z Lutfi</strong> - &copy; &nbsp;
                <strong>{new Date().getFullYear()}</strong> All Rights Reserved.
                Powered by{" "}
                <OutboundLink
                  href="https://gatsby.org
                "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Gatsby"
                >
                  Gatsby
                </OutboundLink>{" "}
                and deployed via{" "}
                <OutboundLink
                  href="https://netlify.com
                "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Netlify"
                >
                  Netlify
                </OutboundLink>{" "}
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
