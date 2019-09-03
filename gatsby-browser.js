/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Adding page transitions

// import React from "react"
// import Transition from "./src/components/transition"

// Global Styles
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "./src/styles/scss/mdb.scss"

// Adds support for the Gatsby Image Background plugin
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// import Transition from "./src/components/transition"

// Page Transition wrapper for pages.
// export const wrapPageElement = ({ element, props }) => {
//   return <Transition {...props}>{element}</Transition>
// }
