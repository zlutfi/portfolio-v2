import React from "react"
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact"
import { Link } from "gatsby"

const Breadcrumb = props => {
  return (
    <MDBBreadcrumb color="elegant" light>
      <MDBBreadcrumbItem icon icon="folder-open">
        <Link to="/projects">Main</Link>
      </MDBBreadcrumbItem>
      <MDBBreadcrumbItem>{props.category}</MDBBreadcrumbItem>
      <MDBBreadcrumbItem active>{props.title}</MDBBreadcrumbItem>
    </MDBBreadcrumb>
  )
}

export default Breadcrumb
