/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div className="site">
        <Navbar />

        <div className="site-content">{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
