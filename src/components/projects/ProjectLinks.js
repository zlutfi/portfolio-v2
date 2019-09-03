import React from "react"
import { Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import posed from "react-pose"

const Nav = posed.h5({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1,
  },
  press: {
    scale: 1,
  },
})

const ArrowRight = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    x: -10,
  },
  hover: {
    scale: 1,
    x: 10,
  },
  press: {
    scale: 1.1,
  },
})
const ArrowLeft = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    x: 10,
  },
  hover: {
    scale: 1,
    x: -10,
  },
  press: {
    scale: 1.1,
  },
})

const ProjectLinks = props => {
  return (
    <>
      <MDBContainer className=" py-5">
        <MDBRow between className="px-5">
          <MDBCol
            size="auto"
            className="text-center"
            // style={{ backgroundColor: "#ccc" }}
          >
            {props.previous && (
              <Link to={`${props.previous.url}`} className="project-nav">
                <Nav className="font-weight-bold">
                  <MDBRow>
                    <MDBCol size="auto">
                      <ArrowLeft>
                        <MDBIcon icon="arrow-alt-circle-left" />
                      </ArrowLeft>
                    </MDBCol>
                    <MDBCol size="auto">Prev</MDBCol>
                  </MDBRow>
                </Nav>
              </Link>
            )}
          </MDBCol>
          <MDBCol
            size="auto"
            className="text-center"
            // style={{ backgroundColor: "#ccc" }}
          >
            {props.next && (
              <Link to={`${props.next.url}`} className="project-nav">
                <Nav className="font-weight-bold">
                  <MDBRow>
                    <MDBCol size="auto">Next</MDBCol>
                    <MDBCol size="auto">
                      <ArrowRight>
                        <MDBIcon icon="arrow-alt-circle-right" />
                      </ArrowRight>
                    </MDBCol>
                  </MDBRow>
                </Nav>
                {/* </MDBBtn> */}
              </Link>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ProjectLinks
