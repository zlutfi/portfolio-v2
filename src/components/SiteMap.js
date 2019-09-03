import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

const SiteMap = ({ input }) => (
  <MDBContainer>
    <MDBRow size="12" className="py-5">
      <MDBCol>
        <h2>Sitemap</h2>
      </MDBCol>
    </MDBRow>
    <MDBRow className="pb-5">
      <MDBCol size="6" md="4">
        <ul>
          {input.allPrismicPage.edges.map(page => (
            <li key={page.node.id}>
              <Link to={page.node.url}>{page.node.data.title}</Link>
            </li>
          ))}
          {input.allPrismicStaticPage.edges.map(page => (
            <li key={page.node.id}>
              <Link to={page.node.url}>{page.node.data.title}</Link>
            </li>
          ))}
        </ul>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)
export default SiteMap

SiteMap.propTypes = {
  input: PropTypes.object.isRequired,
}
