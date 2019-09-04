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
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
          previous {
            id
            uid
            url
          }
          next {
            id
            uid
            url
          }
        }
      }
      allPrismicProject {
        edges {
          node {
            id
            uid
          }
          previous {
            id
            uid
            url
          }
          next {
            id
            uid
            url
          }
        }
      }
      allPrismicCategory {
        edges {
          node {
            id
            uid
            data {
              title
            }
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve("src/templates/page.js")
  const postTemplate = path.resolve("src/templates/post.js")
  const projectTemplate = path.resolve("src/templates/project.js")
  const categoryTemplate = path.resolve("src/templates/category.js")

  // Create all dynamic pages
  pages.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  }),
    // Create all dynamic posts
    pages.data.allPrismicPost.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.uid}`,
        component: postTemplate,
        context: {
          uid: edge.node.uid,
          prev: edge.previous,
          next: edge.next,
        },
      })
    }),
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
    }),
    // Create all dynamic category
    pages.data.allPrismicCategory.edges.forEach(edge => {
      createPage({
        path: `/projects/category/${edge.node.uid}`,
        component: categoryTemplate,
        context: {
          uid: edge.node.uid,
          title: edge.node.data.title,
        },
      })
    })
}
