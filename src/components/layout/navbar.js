import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdbreact"

import Logo from "./logo"

class Navbar extends Component {
  state = {
    collapsed: false,
  }
  // Display menu on click when navbar is collapsed
  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <>
        <MDBNavbar light color="white" expand="lg" fixed="top" scrolling>
          <MDBContainer>
            {/* ZL logo section */}
            <MDBNavbarBrand>
              <Link to="/" aria-label="Home" title="Home">
                <Logo className="navbar-logo" />
              </Link>
            </MDBNavbarBrand>
            {/* Show this toggler for smaller screens */}
            <MDBNavbarToggler
              onClick={this.handleTogglerClick}
              aria-label="Toggle Navbar"
            />
            {/* Collapse this section when viewed on smaller screens */}
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav className="align-items-center" right>
                <MDBNavItem className="px-4">
                  <Link
                    to="/"
                    name="Home"
                    title="Home"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </Link>
                </MDBNavItem>
                {/* Display all menu items via static query */}
                <NavItems />
                {/* Show this static contact button */}
                <MDBNavItem className="px-4">
                  <Link
                    to="/contact"
                    name="Contact Me"
                    title="Contact Me"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <MDBBtn size="sm" color="primary">
                      <MDBIcon icon="envelope" className="mr-2" />
                      Let's Chat
                    </MDBBtn>
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapsed}
      </>
    )
  }
}

export default Navbar

// Display nav menu items via data
const NavItems = () => (
  <StaticQuery
    query={graphql`
      {
        prismicMenu(data: { name: { eq: "Navbar Menu" } }) {
          data {
            menu_links {
              label {
                text
              }
              link {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.prismicMenu.data.menu_links.map((document, index) => (
          <MDBNavItem className="px-4" key={index}>
            <Link
              to={document.link.url}
              name={document.label.text}
              title={document.label.text}
              className="nav-link"
              activeClassName="active"
              partiallyActive={true}
            >
              {document.label.text}
            </Link>
          </MDBNavItem>
        ))}
      </>
    )}
  />
)
