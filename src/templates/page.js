import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  }
`

const Page = props => {
  const doc = props.data.prismic.allPages.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <div>
      <h1>{RichText.render(doc.node.title)}</h1>
      <h3>{RichText.render(doc.node.description)}</h3>
    </div>
  )
}

export default Page
