/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Create pages dynamically
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProject {
        edges {
          previous {
            uid
            url
          }
          next {
            uid
            url
          }
          node {
            uid
            first_publication_date
            last_publication_date
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve("src/templates/project.js")

  // Create all dynamic projects
  pages.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
        prev: edge.previous,
        next: edge.next,
      },
    })
  })
}
