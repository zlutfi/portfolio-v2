import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBCard,
  // MDBCardBody,
  // MDBCardText,
  // MDBCardTitle,
  // MDBCardFooter,
  // MDBBadge,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { OutboundLink } from "gatsby-plugin-google-analytics"

const Cards = ({ input }) => {
  return (
    <MDBContainer fluid className="mx-auto py-4 py-md-5">
      <MDBRow>
        {input.map((project, i) => {
          return (
            <MDBCol size="12" md="4" className="mb-4" key={i}>
              {/* <MDBCard> */}
              {/* image section */}
              <Link to={project.node.url} title={project.node.data.title.text}>
                <MDBView hover zoom>
                  <Img
                    fluid={
                      project.node.data.thumbnail.localFile.childImageSharp
                        .fluid
                    }
                    alt={project.node.data.thumbnail.alt}
                    className="rounded"
                  />

                  <MDBMask className="flex-center" overlay="stylish-strong">
                    <MDBRow className="text-center">
                      <MDBCol size="12">
                        <h2 className="white-text h2-responsive">
                          {project.node.data.title.text}
                        </h2>
                      </MDBCol>

                      <MDBCol size="12">
                        <MDBBtn size="sm" color="primary">
                          <FontAwesomeIcon
                            icon="folder-open"
                            className="text-white mr-2"
                          />{" "}
                          View Project
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBMask>
                </MDBView>
              </Link>
              {/* <MDBCardBody>
                  <MDBRow>
                    <MDBCol size="12" className="order-md-last">
                      <MDBCardTitle className="font-weight-bold" tag="div">
                        <MDBRow between>
                          <MDBCol size="12">
                            <MDBIcon icon="folder-open" className="mr-2" />{" "}
                            {project.node.data.title.text}
                          </MDBCol>
                        </MDBRow>
                      </MDBCardTitle>
                      <MDBCardText>{project.node.data.subtitle}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody> */}
              {/* </MDBCard> */}
            </MDBCol>
          )
        })}
      </MDBRow>
    </MDBContainer>
  )
}

Cards.propTypes = {
  input: PropTypes.array.isRequired,
}

export default Cards
