import React from "react"
import PropTypes from "prop-types"
import { MDBNav, MDBNavItem } from "mdbreact"
import { Link } from "gatsby"

function Filter({ input }) {
  return (
    <MDBNav className="nav-pills py-5">
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
            {category.node.data.title}
          </Link>
        </MDBNavItem>
      ))}
    </MDBNav>
  )
}

Filter.propTypes = {
  input: PropTypes.array.isRequired,
}

export default Filter
