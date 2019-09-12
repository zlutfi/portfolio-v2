/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Global Styles
import "bootstrap-css-only/css/bootstrap.min.css"
import "./src/styles/scss/mdb.scss"
import "./src/styles/icons/fontawesome-free/css/all.min.css"

// Adds support for the Gatsby Image Background plugin
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
