import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default class SiteMap extends Component {
  render() {
    const { input } = this.props
    return (
      <MDBContainer>
        <MDBRow size="12" className="py-5">
          <MDBCol>
            <h2>Sitemap</h2>
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-5">
          <MDBCol size="6" md="4">
            <ul>
              {input.node.map(page => (
                <li key={page.id}>
                  <Link to={page.url}>{page.data.title}</Link>
                </li>
              ))}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

SiteMap.propTypes = {
  input: PropTypes.object.isRequired,
}
