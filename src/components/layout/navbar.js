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
} from "mdbreact"
import Logo from "./logo"
import posed from "react-pose"

// Animations for cards on hover
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  press: {
    scale: 1.1,
    fill: "#888",
  },
})

class Navbar extends Component {
  state = {
    collapsed: false,
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <>
        <MDBNavbar
          light
          // color={this.props.bgColor}
          color="white"
          expand="lg"
          fixed="top"
          scrolling
          // transparent
          // transparent={this.props.transparent}
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <Link to="/" aria-label="Home" title="Home">
                <Box className="box">
                  <Logo className="navbar-logo" />
                </Box>
              </Link>
            </MDBNavbarBrand>

            <MDBNavbarToggler
              onClick={this.handleTogglerClick}
              aria-label="Toggle Navbar"
            />

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
                <NavItems />
                <MDBNavItem className="px-4">
                  <Link
                    to="/contact"
                    name="Contact Me"
                    title="Contact Me"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <MDBBtn size="sm" color="light-green">
                      Contact Me
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

export const NavItems = () => (
  <StaticQuery
    query={graphql`
      {
        prismicMenu {
          data {
            menu_links {
              label {
                text
              }
              link {
                link_type
                type
                url
                id
              }
              partially_active
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {data.prismicMenu.data.menu_links.map((document, index) => (
          <MDBNavItem className="px-4" key={document.link.id}>
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
