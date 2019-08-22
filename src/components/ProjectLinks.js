import React from "react"
import { Link } from "gatsby"
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"

const ProjectLinks = props => {
  return (
    <>
      <section style={{ backgroundColor: "#ddd" }}>
        <MDBContainer className=" py-5">
          {/* <MDBRow>
            <MDBCol size="12">
              <h2 className="font-weight-bold">Other Projects</h2>
            </MDBCol>
          </MDBRow> */}
          <MDBRow>
            <MDBCol
              size="12"
              md="4"
              className="text-center"
              // style={{ backgroundColor: "#ccc" }}
            >
              {props.previous && (
                <Link to={`${props.previous.url}`}>
                  {/* <MDBIcon icon="angle-left" size="4x" className="grey-text" /> */}
                  <MDBBtn tag="span" color="primary">
                    &#8592; Prev
                  </MDBBtn>
                </Link>
              )}
            </MDBCol>
            <MDBCol
              size="12"
              md="4"
              className="text-center"
              // style={{ backgroundColor: "#ccc" }}
            >
              <Link to="/projects">
                {/* <MDBIcon icon="folder-open" size="4x" className="grey-text" /> */}
                <MDBBtn tag="span" color="elegant">
                  <MDBIcon icon="folder-open" className="mr-2" />
                  All Projects
                </MDBBtn>
              </Link>
            </MDBCol>

            <MDBCol
              size="12"
              md="4"
              className="text-center"
              // style={{ backgroundColor: "#ccc" }}
            >
              {props.next && (
                <Link to={`${props.next.url}`}>
                  {/* <MDBIcon icon="angle-right" size="4x" className="grey-text" /> */}

                  <MDBBtn tag="span" color="primary">
                    Next &#8594;
                  </MDBBtn>
                </Link>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  )
}

export default ProjectLinks
