import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  // MDBCardFooter,
  // MDBBadge,
  MDBBtn,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Zoom from "react-reveal/Zoom"

import posed, { PoseGroup } from "react-pose"

const PersonItem = posed.div({
  enter: {
    opacity: 1,
    scale: 1,
    delay: ({ i }) => i * 400,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    delay: ({ i }) => i * 300,
  },
})

const Cards = ({ input }) => {
  return (
    <MDBContainer>
      <MDBRow className="py-5">
        {/* <PoseGroup animateOnMount> */}
        {input.map((project, i) => {
          return (
            <MDBCol size="12" md="6" className="mb-4" key={i}>
              <Zoom delay={300 * i}>
                <MDBCard>
                  {/* image section */}
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
                        <MDBIcon
                          icon="search"
                          size="4x"
                          className="white-text"
                        />
                      </MDBMask>
                    </MDBView>
                  </Link>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol size="12" className="order-md-last">
                        {/* <div className="card-btn">
                                  <Link to={project.node.url}>
                                    <MDBBtn color="primary" tag="span">
                                      View Project{" "}
                                      <MDBIcon icon="folder-open" className="ml-2" />
                                    </MDBBtn>
                                  </Link>
                                </div> */}

                        <MDBCardTitle className="font-weight-bold" tag="div">
                          <MDBRow between>
                            <MDBCol size="12">
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
                        <MDBCardText tag="div">
                          <MDBRow>
                            <MDBCol size="auto">
                              <OutboundLink
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Github"
                              >
                                <MDBBtn
                                  color="elegant"
                                  tag="span"
                                  size="sm"
                                  className="btn-rounded"
                                >
                                  <MDBIcon fab icon="github" className="mr-2" />{" "}
                                  View Code
                                </MDBBtn>
                              </OutboundLink>
                            </MDBCol>
                            <MDBCol size="auto">
                              <Link to={project.node.url}>
                                <MDBBtn
                                  color="primary"
                                  tag="span"
                                  size="sm"
                                  className="btn-rounded"
                                >
                                  View Project{" "}
                                  <MDBIcon
                                    icon="folder-open"
                                    className="ml-2"
                                  />
                                </MDBBtn>
                              </Link>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </Zoom>
            </MDBCol>
          )
        })}
        {/* </PoseGroup> */}
      </MDBRow>
    </MDBContainer>
  )
}

Cards.propTypes = {
  input: PropTypes.array.isRequired,
}

export default Cards

// <MDBCol
// size="12"
// //md="6"
// //xl="4"
// className="mb-4"
// key={document.node.id}
// >
// <Zoom bottom delay={200 * index}>
//   <MDBCard className="card-zoom">
//     <MDBRow>
//       <MDBCol md="6">
//         <Link
//           to={`/projects/${document.node.uid}`}
//           alt="View Project"
//         >
//           <MDBView waves className="projects">
//             <Img
//               fluid={
//                 document.node.data.hero_img.localFile
//                   .childImageSharp.fluid
//               }
//               alt={document.node.data.hero_img.alt}
//             />
//           </MDBView>
//         </Link>
//       </MDBCol>
//       <MDBCol md="6" middle>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol size="12" className="order-md-last">
//               <Link
//                 to={`/projects/${document.node.uid}`}
//                 alt="View Project"
//               >
//                 <div className="card-btn d-block d-md-none">
//                   <MDBBtn color="secondary" tag="span">
//                     <MDBIcon icon="folder-open" />
//                   </MDBBtn>
//                 </div>
//                 <div className="d-none d-lg-block pt-3">
//                   <MDBBtn size="md" color="secondary" tag="span">
//                     <MDBIcon icon="folder-open" className="mr-2" />
//                     View Project
//                   </MDBBtn>
//                 </div>
//                 <div className="d-none d-md-block d-lg-none pt-3">
//                   <MDBBtn size="sm" color="secondary" tag="span">
//                     <MDBIcon icon="folder-open" className="mr-2" />
//                     View Project
//                   </MDBBtn>
//                 </div>
//               </Link>
//             </MDBCol>

//             <MDBCol size="12">
//               <MDBCardTitle className="font-weight-bold" tag="h5">
//                 {document.node.data.title.text}
//               </MDBCardTitle>
//               {/* <hr /> */}
//             </MDBCol>
//             <MDBCol size="12">
//               <MDBCardText>
//                 {document.node.data.subtitle.text}
//               </MDBCardText>
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCol>
//     </MDBRow>
//   </MDBCard>
// </Zoom>
// </MDBCol>
