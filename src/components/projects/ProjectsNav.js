import React from "react"
import { MDBNav, MDBNavItem } from "mdbreact"
import { Link } from "gatsby"

export default ({ input }) => (
  <MDBNav className="nav-pills pb-5">
    <MDBNavItem>
      <Link to="/projects" className="nav-link" activeClassName="active">
        All
      </Link>
    </MDBNavItem>
    {input.map((category, index) => (
      <MDBNavItem key={index}>
        <Link
          to={category.node.url}
          className="nav-link"
          activeClassName="active"
        >
          {category.node.data.title}{" "}
        </Link>
      </MDBNavItem>
    ))}
  </MDBNav>
)
