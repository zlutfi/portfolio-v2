/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "../components/layout/footer"
import Navbar from "../components/layout/navbar"

const Layout = ({ children, navbarColor, element, props }) => {
  return (
    <>
      <div className="site">
        <Navbar />
        <div className="site-content">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
