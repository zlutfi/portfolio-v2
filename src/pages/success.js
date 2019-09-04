import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

function SuccessPage({ data }) {
  return (
    <>
      <Layout>
        <SEO title={data.prismicStaticPage.data.title} />

        <MDBContainer>
          <MDBRow className="pt-5 mt-5">
            <MDBCol size="12" className="text-center py-5 my-5">
              {/* <MDBAnimation type="fadeInUp" delay="0.1s"> */}
              <h1 className="font-weight-bold text-primary display-2">
                {data.prismicStaticPage.data.title}
              </h1>
              {/* </MDBAnimation> */}
              {/* <MDBAnimation type="fadeInUp" delay="0.3s"> */}
              <p className="lead">{data.prismicStaticPage.data.subtitle}</p>
              {/* </MDBAnimation> */}
            </MDBCol>
            <MDBCol className="text-center pb-5">
              {/* <MDBAnimation type="fadeInUp" delay="0.5s"> */}
              <Link to="/contact">
                <MDBBtn color="elegant">
                  <MDBIcon icon="caret-left" className="mr-2" />
                  Return to Previous Page
                </MDBBtn>
              </Link>
              {/* </MDBAnimation> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  )
}
export default SuccessPage

SuccessPage.propTypes = {
  data: PropTypes.shape({
    prismicStaticPage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export const successPageQuery = graphql`
  query {
    prismicStaticPage(uid: { eq: "success" }) {
      data {
        title
        subtitle
      }
    }
  }
`
