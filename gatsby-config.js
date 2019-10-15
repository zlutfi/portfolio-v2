// Configure token for environments & security
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Import HTML Serializer and Link Resolver
const prismicHtmlSerializer = require("./src/utils/htmlSerializer")
const prismicLinkResolver = require("./src/utils/linkResolver")

// Disable Robots.txt for Netlify branch previews

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.zlutfi.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `ZL Project Portfolio`,
    siteUrl: NETLIFY_SITE_URL,
    description: `Web Developer Specializing in Modern JAMstack Websites & Graphics`,
    author: `zlutfi.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
        exclude: ["/category/*", `/path/to/page`, "404", "/success", "/blog/*"],
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zlutfi-portfolio`,
        short_name: `zlutfi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from prismic.io.
     */
    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        repositoryName: "zlutfi",

        // An API access token to your prismic.io repository. This is required
        accessToken: `${process.env.PRISMIC_API_KEY}`,

        // Set a link resolver function used to process links in your content.
        linkResolver: () => prismicLinkResolver,

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
          // { 'fetchLinks' : '{custom-type}.{field}' }
        ],

        // Set an HTML serializer function used to process formatted content.
        htmlSerializer: () => prismicHtmlSerializer,

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          // Your custom types mapped to schemas
          project: require("./src/schemas/project.json"),
          homepage: require("./src/schemas/homepage.json"),
          menu: require("./src/schemas/menu.json"),
          page: require("./src/schemas/page.json"),
          static_page: require("./src/schemas/static_page.json"),
        },

        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: "*",

        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-sharp for use with gatsby-image.
        shouldNormalizeImage: ({ node, key, value }) => {
          // Return true to normalize the image or false to skip.
          return true
        },
        typePathsFilenamePrefix: "prismic-typepaths---zlutfi",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    `gatsby-plugin-netlify`,
    "gatsby-plugin-netlify-cache",
  ],
}
