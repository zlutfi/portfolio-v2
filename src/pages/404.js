import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MDBContainer>
      <MDBRow className="pt-5 mt-5">
        <MDBCol size="12" className="text-center py-5 my-5">
          <MDBAnimation type="fadeInUp" delay="0.1s">
            <h1 className="font-weight-bold text-primary display-2">404 </h1>
          </MDBAnimation>
          <MDBAnimation type="fadeInUp" delay="0.3s">
            <p className="lead">The page you requested was not found.</p>
          </MDBAnimation>
        </MDBCol>
        <MDBCol className="text-center pb-5">
          <MDBAnimation type="fadeInUp" delay="0.5s">
            <Link to="/">
              <MDBBtn color="elegant">
                <MDBIcon icon="caret-left" className="mr-2" />
                Return to Home
              </MDBBtn>
            </Link>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default NotFoundPage
