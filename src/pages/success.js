import React from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import PageHero from "../components/pageHero"

function SuccessPage() {
  return (
    <Layout>
      <SEO title="Success" />
      {/* <PageHero
        title="Success"
        subtitle="Your message has been sent successfully"
      /> */}
      <MDBContainer>
        <MDBRow className="pt-5 mt-5">
          <MDBCol size="12" className="text-center py-5 my-5">
            <MDBAnimation type="fadeInUp" delay="0.1s">
              <h1 className="font-weight-bold text-primary display-2">
                Success
              </h1>
            </MDBAnimation>
            <MDBAnimation type="fadeInUp" delay="0.3s">
              <p className="lead">Your message has been sent successfully</p>
            </MDBAnimation>
          </MDBCol>
          <MDBCol className="text-center pb-5">
            <MDBAnimation type="fadeInUp" delay="0.5s">
              <Link to="/contact">
                <MDBBtn color="elegant">
                  <MDBIcon icon="caret-left" className="mr-2" />
                  Return to Previous Page
                </MDBBtn>
              </Link>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}
export default SuccessPage
