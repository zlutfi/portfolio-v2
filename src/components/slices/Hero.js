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

function Hero({ input }) {
  return (
    <BackgroundImage fluid={input.background.localFile.childImageSharp.fluid}>
      <MDBJumbotron fluid id="hero">
        <MDBRow className="pt-2 pt-md-5 my-2 my-md-5 text-center">
          <MDBContainer>
            <MDBCol size="12" className="pt-5 mt-5 mx-auto">
              <MDBAnimation type="fadeIn" delay="0.2s" reveal>
                <h1 className="white-text pb-3">{input.title.text}</h1>
              </MDBAnimation>

              <MDBRow className="py-2 py-md-4">
                <MDBCol>
                  <MDBAnimation type="fadeIn" delay="0.5s" reveal>
                    <Link to={input.button_link.url} alt="dat alt">
                      <MDBBtn outline color="primary" tag="span">
                        <MDBIcon icon="folder-open" className="mr-2" />
                        {input.button_title}
                      </MDBBtn>
                    </Link>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBContainer>
        </MDBRow>
      </MDBJumbotron>
    </BackgroundImage>
  )
}
export default Hero
