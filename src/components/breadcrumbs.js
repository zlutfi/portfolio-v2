import React from "react"
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact"
// import { Link } from "gatsby"

const Breadcrumbs = props => {
  return (
    <MDBContainer>
      <MDBBreadcrumb dark="true">
        <MDBBreadcrumbItem icon="folder-open">
          {/* <Link to="/projects" title="Projects"> */}
          <span className="px-md-3 px-0">Projects</span>
          {/* </Link> */}
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <span className="px-md-3 px-0">{props.category}</span>
          {/* <Link to={props.categoryLink}>{props.category}</Link> */}
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <span className="px-md-3 px-0">{props.title}</span>
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  )
}

export default Breadcrumbs
