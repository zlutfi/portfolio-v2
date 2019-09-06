import React from "react"
import PropTypes from "prop-types"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBBadge,
  MDBBtn,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Zoom from "react-reveal/Zoom"
import posed from "react-pose"

// Animations for cards on hover
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.05)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
})

function Cards({ input }) {
  return (
    <MDBRow className="pb-5">
      {input.map((project, index) => (
        <MDBCol size="12" md="6" xl="4" className="mb-4" key={index}>
          <Zoom delay={200 * index}>
            <Box className="box">
              <MDBCard style={{ backgroundColor: "#f8f9fa" }}>
                <Link to={project.node.url}>
                  <MDBView hover zoom>
                    <Img
                      fluid={
                        project.node.data.thumbnail.localFile.childImageSharp
                          .fluid
                      }
                      alt={project.node.data.thumbnail.alt}
                    />
                    <MDBMask className="flex-center" overlay="stylish-strong">
                      <MDBBtn size="sm" color="light-green" tag="span">
                        <MDBIcon icon="folder-open" className="mr-2" />
                        View Project
                      </MDBBtn>
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
                      <MDBCol size="auto">
                        {project.node.tags.map((tag, index) => (
                          <MDBBadge
                            pill
                            color="grey"
                            className="ml-2"
                            key={index}
                          >
                            {tag}
                          </MDBBadge>
                        ))}
                      </MDBCol>
                    </MDBRow>
                  </MDBCardTitle>
                  <MDBCardText>{project.node.data.subtitle}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Box>
          </Zoom>
        </MDBCol>
      ))}
    </MDBRow>
  )
}

Cards.propTypes = {
  input: PropTypes.array.isRequired,
}

export default Cards
