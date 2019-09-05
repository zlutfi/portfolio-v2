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
              <Link to="/" aria-label="Home">
                <Box className="box">
                  <Logo alt="Logo" />
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

// Inline SVG logo

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 163.13 72.6"
    fill="#fff"
    className="navbar-logo"
  >
    <defs>
      <clipPath transform="translate(0 .02)">
        <polygon points="163.13 72.58 91.3 72.58 91.3 -0.02 119.62 -0.02 119.62 64.44 163.13 64.1 163.13 72.58" />
      </clipPath>
    </defs>
    <path
      d="M86.17,72.58H0v-8.5L43.08,7.25,1.84,7.12,1.72,0H79.46V5.72L37.66,64.61l48.51-.51Z"
      transform="translate(0 .02)"
    />
    <path
      d="M163.13,72.58H91.3V0h28.32V64.44l43.51-.34Z"
      transform="translate(0 .02)"
    />
    <polygon points="163.13 72.6 91.3 72.6 91.3 0 119.62 0 119.62 64.46 163.13 64.12 163.13 72.6" />
    <g>
      <path
        d="M86.17,72.58H0v-8.5L43.08,7.25,1.84,7.12,1.72,0H79.46V5.72L37.66,64.61l48.51-.51Z"
        transform="translate(0 .02)"
      />
    </g>
  </svg>
)
