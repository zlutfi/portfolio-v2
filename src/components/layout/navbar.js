import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
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

import AniLink from "gatsby-plugin-transition-link/AniLink"

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
        <MDBNavbar
          dark
          color="elegant-color"
          expand="lg"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            {/* ZL logo section */}
            <AniLink
              cover
              direction="top"
              bg="#0a33ff"
              duration={1}
              to="/"
              aria-label="Home"
              title="Home"
            >
              <MDBNavbarBrand>
                <Logo className="navbar-logo" />
              </MDBNavbarBrand>
            </AniLink>
            {/* Show this toggler for smaller screens */}
            <MDBNavbarToggler
              onClick={this.handleTogglerClick}
              aria-label="Toggle Navbar"
            />
            {/* Collapse this section when viewed on smaller screens */}
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav className="align-items-center" right>
                <AniLink
                  cover
                  direction="top"
                  bg="#0a33ff"
                  duration={1}
                  to="/"
                  name="Home"
                  title="Home"
                  className="nav-link"
                  activeClassName="active"
                >
                  <MDBNavItem className="px-4">Home</MDBNavItem>
                </AniLink>
                {/* Display all menu items via static query */}
                <NavItems />
                {/* Show this static contact button */}
                <AniLink
                  cover
                  direction="top"
                  bg="#0a33ff"
                  duration={1}
                  to="/contact"
                  name="Contact Me"
                  title="Contact Me"
                  className="nav-link"
                  activeClassName="active"
                >
                  <MDBNavItem className="px-4">
                    <MDBBtn size="sm" color="primary" className="btn-rounded">
                      <MDBIcon icon="envelope" className="mr-2" />
                      Let's Chat
                    </MDBBtn>
                  </MDBNavItem>
                </AniLink>
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
            <AniLink
              cover
              direction="bottom"
              bg="#0a33ff"
              duration={1}
              to={document.link.url}
              name={document.label.text}
              title={document.label.text}
              className="nav-link"
              activeClassName="active"
              partiallyActive={true}
            >
              {document.label.text}
            </AniLink>
          </MDBNavItem>
        ))}
      </>
    )}
  />
)
