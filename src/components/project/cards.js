import React from "react"
import PropTypes from "prop-types"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  // MDBBadge,
  MDBBtn,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

function Cards({ input }) {
  return (
    <MDBRow className="pb-5">
      {input.map((project, index) => {
        return (
          <MDBCol size="12" md="6" xl="4" className="mb-4" key={index}>
            <Fade bottom delay={200 * index}>
              <MDBCard>
                <Link
                  to={project.node.url}
                  title={project.node.data.title.text}
                >
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
                      <MDBIcon icon="search" size="4x" className="white-text" />
                    </MDBMask>
                  </MDBView>
                </Link>
                <MDBCardBody>
                  <div className="card-btn">
                    <Link to={project.node.url}>
                      <MDBBtn color="primary" tag="span">
                        <MDBIcon icon="folder-open" />
                      </MDBBtn>
                    </Link>
                  </div>

                  <MDBCardTitle className="font-weight-bold" tag="div">
                    <MDBRow between>
                      <MDBCol size="auto">
                        {project.node.data.title.text}
                      </MDBCol>
                      {/* <MDBCol size="auto">
                        {project.node.tags.map((tag, index) => (
                          <MDBBadge
                            pill
                            color="dark"
                            className="ml-2"
                            key={index}
                          >
                            {tag}
                          </MDBBadge>
                        ))}
                      </MDBCol> */}
                    </MDBRow>
                  </MDBCardTitle>
                  <MDBCardText>{project.node.data.subtitle}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Fade>
          </MDBCol>
        )
      })}
    </MDBRow>
  )
}

Cards.propTypes = {
  input: PropTypes.array.isRequired,
}

export default Cards
