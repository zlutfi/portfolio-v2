import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
  MDBIcon,
  MDBNavItem,
  MDBNavbar,
} from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { PropTypes } from "prop-types"
import Logo from "./logo"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          copyright
          powered_by_title
          powered_by {
            link {
              url
              target
            }
            image {
              url
              alt
            }
          }
        }
      }
      prismicMenu(data: { name: { eq: "Footer Menu" } }) {
        data {
          menu_links {
            label {
              text
            }
            link {
              link_type
              type
              url
              id
            }
            partially_active
          }
        }
      }
    }
  `)
  return (
    <>
      <MDBFooter color="unique-color-dark" className="font-small">
        <MDBContainer className="pb-3 pt-5">
          {/* <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
            {data.prismicMenu.data.menu_links.map((document, index) => (
              <MDBCol md="2" className="b-3" key={index}>
                <Link
                  to={document.link.url}
                  name={document.label.text}
                  title={document.label.text}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <h6 className="title font-weight-bold text-uppercase white-text">
                    {document.label.text}
                  </h6>
                </Link>
              </MDBCol>
            ))}
          </MDBRow>
          <hr className="rgba-grey-light" style={{ margin: "0 15%" }} /> */}

          <MDBRow className="py-3 justify-content-center text-center">
            <MDBCol md="auto">
              {/* <h5 className="title text-primary font-weight-bold text-uppercase">
                Information
              </h5> */}
              <p>Built with ♥ and powered by </p>
            </MDBCol>
            {data.prismicFooter.data.powered_by.map((brand, index) => (
              <MDBCol key={index} size="auto" middle>
                <OutboundLink
                  href={brand.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={brand.image.alt}
                  title={brand.image.alt}
                >
                  <img
                    src={brand.image.url}
                    alt={brand.image.alt}
                    height="15px"
                    className="mb-3"
                  />
                </OutboundLink>
              </MDBCol>
            ))}

            {/* <MDBCol md="3">
              <h5 className="title text-primary font-weight-bold text-uppercase">
                Navigate
              </h5>
              <ul className="pl-0">
                {data.prismicMenu.data.menu_links.map((document, index) => (
                  <li className="list-unstyled" key={index}>
                    <Link
                      to={document.link.url}
                      name={document.label.text}
                      title={document.label.text}
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      {document.label.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title text-primary font-weight-bold text-uppercase">
                Follow Me
              </h5>
              <ul className="pl-0">
                {data.prismicFooter.data.powered_by.map((brand, index) => (
                  <li className="list-unstyled" key={index}>
                    <OutboundLink
                      href={brand.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt={brand.image.alt}
                      title={brand.image.alt}
                    >
                      <img
                        src={brand.image.url}
                        alt={brand.image.alt}
                        height="20px"
                        className="mb-3"
                      />
                    </OutboundLink>
                  </li>
                ))}
              </ul>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer>
            <MDBRow>
              {/* <MDBCol size="auto">
                <Logo className="footer-logo" />
              </MDBCol> */}
              <MDBCol>
                &copy; &nbsp;
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
