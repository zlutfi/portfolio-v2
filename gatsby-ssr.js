/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

//  Transition component for page animations
import React from "react"
import Transition from "./src/components/layout/transition"

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}
