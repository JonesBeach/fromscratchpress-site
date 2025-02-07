const siteUrl = "https://fromscratchpress.com/"

module.exports = {
  siteMetadata: {
    title: `From Scratch Press`,
    description: `Coming soon...`,
    author: `Tyler Green`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0460bd`,
        theme_color: `#0460bd`,
        display: `minimal-ui`,
        icon: `static/favicon-512x512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
