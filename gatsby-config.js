/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:`mikisPortfolio`,
    description:`村松美紀のポートフォリオサイトです`,
    lang:`ja`,
    siteUrl:`https://m-miki-portfolio.netlify.app/`,
    locale:`ja_JP`,
    fbappid:`xxxxx`,
  },

  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name : `images`,
        path : `${__dirname}/src/images`
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
