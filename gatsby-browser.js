/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import React from "react"
// Global Styles
import "bootstrap-css-only/css/bootstrap.min.css"
import "./src/styles/scss/mdb.scss"
import "./src/styles/icons"

// import Transition from "./src/components/layout/transition"

// Transition component for page animations
// export const wrapPageElement = ({ element, props }) => {
//   return <Transition {...props}>{element}</Transition>
// }

// Displays a message when a service worker updates
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

// Adds support for the Gatsby Image Background plugin
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
