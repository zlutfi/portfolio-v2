// Configuring token for environments & security
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio v2`,
    description: `Version 2 of the zlutfi.com portfolio website.`,
    author: `@zlutfi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/category/*", `/path/to/page`, "404", "/success"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zlutfi-portfolio-v2`,
        short_name: `zlutfi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "zlutfi", // (REQUIRED, replace with your own)
        accessToken: `${process.env.PRISMIC_API_KEY}`, // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Page", // TypeName from prismic
            match: "/:uid", // Pages will be generated under this pattern
            path: "/", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/page.js"),
          },
          {
            type: "Post", // TypeName from prismic
            match: "/blog/post/:uid", // Posts will be generated under this pattern
            path: "/blog/post-preview", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/post.js"),
          },
          {
            type: "Project", // TypeName from prismic
            match: "/projects/:uid", // Projects will be generated under this pattern
            path: "/projects/project-preview", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/project.js"),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
