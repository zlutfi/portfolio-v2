import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBFooter, MDBIcon } from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { PropTypes } from "prop-types"

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
    }
  `)
  return (
    <>
      <MDBFooter color="unique-color-dark" className="font-small pt-5">
        <MDBContainer className="text-center pb-3">
          <MDBRow className="justify-content-center py-3">
            <MDBCol size="12" md="6" className="text-md-left">
              <strong>
                <MDBIcon icon="code" className="mr-2" />
                {data.prismicFooter.data.copyright}
              </strong>
              &nbsp;- &copy; Copyright&nbsp;
              <strong>{new Date().getFullYear()}</strong>
            </MDBCol>
            <MDBCol size="12" md="auto" className="py-4 py-md-0">
              {data.prismicFooter.data.powered_by_title}
            </MDBCol>
            {data.prismicFooter.data.powered_by.map((brand, index) => (
              <MDBCol key={index} size="auto">
                <OutboundLink
                  href={brand.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={brand.image.alt}
                >
                  <img
                    src={brand.image.url}
                    alt={brand.image.alt}
                    height="20px"
                    className="mb-3"
                  />
                </OutboundLink>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
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
