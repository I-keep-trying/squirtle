module.exports = {
  siteMetadata: {
    title: `squirtle`
  },
  plugins: [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  { 
    resolve: `gatsby-source-filesystem`, 
    options: { 
      path: `./src/data/` },
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
],
}
