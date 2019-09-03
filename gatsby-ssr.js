/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import Transition from "./src/components/Transition"

// Wraps pages with Transition component
export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}
