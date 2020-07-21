/** Env varibale */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Github User Finder`,
    description: `Find the github user search away here, Gatsby, React Project`,
    author: `github.com/lifeeric`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Github User Finder`,
        short_name: `GFU`,
        start_url: `/`,
        background_color: `#EEF2F5`,
        theme_color: `#EEF2F5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_GITHUB_API}`,
        },
      },
    },
    /** Redux */
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: "./src/state/createStore",
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: "__PRELOADED_STATE__",
      },
    },
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        // Find the view id in the GA admin in a section labeled "views"
        GAViewID: `224297199`,
        minimumThreshold: 0.03,
        // Set Google Analytics jwt with Google Service Account email and private key
        jwt: {
          client_email: `${process.env.GATSBY_CLIENT_EMAIL}`,
          private_key: `${process.env.GATSBY_KEY}`,
        },
        // The "period" for fetching analytic data.
        period: {
          startDate: new Date(),
          endDate: new Date(),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
