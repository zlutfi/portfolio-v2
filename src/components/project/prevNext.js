import React from "react"
import { Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact"
import styled from "styled-components"

const Section = styled.div`
  background-color: #f7f8fa;
`

const PrevNext = props => {
  return (
    <>
      <Section>
        <MDBContainer className="py-5">
          <MDBRow between className="px-5">
            <MDBCol size="auto" className="text-center">
              {props.previous && (
                <Link to={`${props.previous.url}`}>
                  <MDBBtn size="sm" color="elegant">
                    <MDBIcon icon="arrow-alt-circle-right" className="mr-3" />
                    Prev Project{" "}
                  </MDBBtn>
                  {/* <Nav className="font-weight-bold">
                    <MDBRow>
                      <MDBCol size="auto">
                        <ArrowLeft>
                          <MDBIcon icon="arrow-alt-circle-left" />
                        </ArrowLeft>
                      </MDBCol>
                      <MDBCol size="auto">PREV</MDBCol>
                    </MDBRow>
                  </Nav> */}
                </Link>
              )}
            </MDBCol>
            {/* <MDBCol size="auto">
              <Link to="/projects" title="Projects" className="project-nav">
                <Projects>
                  <MDBIcon
                    icon="grip-horizontal"
                    size="2x"
                    className="grey-text"
                  />
                </Projects>
              </Link>
            </MDBCol> */}
            <MDBCol size="auto" className="text-center">
              {props.next && (
                <Link to={`${props.next.url}`} className="project-nav">
                  <MDBBtn size="sm" color="elegant">
                    Next Project{" "}
                    <MDBIcon icon="arrow-alt-circle-right" className="ml-3" />
                  </MDBBtn>
                  {/* <Nav className="font-weight-bold">
                    <MDBRow>
                      <MDBCol size="auto">NEXT</MDBCol>
                      <MDBCol size="auto">
                        <ArrowRight>
                          <MDBIcon icon="arrow-alt-circle-right" />
                        </ArrowRight>
                      </MDBCol>
                    </MDBRow>
                  </Nav> */}
                </Link>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Section>
    </>
  )
}

export default PrevNext
