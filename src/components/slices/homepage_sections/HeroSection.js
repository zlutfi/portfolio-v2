import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//MDB Hero Components
import {
  MDBJumbotron,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
  MDBContainer,
} from "mdbreact"

function HeroSection({ input }) {
  return (
    <BackgroundImage
      fluid={input.primary.background.localFile.childImageSharp.fluid}
    >
      <MDBJumbotron fluid id="hero">
        <MDBContainer>
          <MDBRow className="py-5 my-5 text-center">
            <MDBCol size="10" className="py-5 my-5 mx-auto">
              <MDBAnimation type="fadeIn" delay="0.2s" reveal>
                {/* <h1 className="white-text pb-3 font-weight-bold"> */}
                <div
                  dangerouslySetInnerHTML={{ __html: input.primary.title.html }}
                />
                {/* </h1> */}
              </MDBAnimation>

              <MDBRow className="py-2 py-md-4">
                <MDBCol>
                  <MDBAnimation type="fadeIn" delay="0.5s" reveal>
                    <Link to={input.primary.button_link.url} alt="dat alt">
                      <MDBBtn color="primary" tag="span">
                        <MDBIcon icon="folder-open" className="mr-2" />
                        {input.primary.button_title}
                      </MDBBtn>
                    </Link>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBJumbotron>
    </BackgroundImage>
  )
}
export default HeroSection
