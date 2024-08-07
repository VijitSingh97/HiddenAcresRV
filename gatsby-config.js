const path = require('path');

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,          // use prettier to format JS code output (default)
        svgo: true,              // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // disable plugins
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `signage`,
        path: `${__dirname}/src/images/signage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `amenities`,
        path: `${__dirname}/src/images/amenities`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `park`,
        path: `${__dirname}/src/images/park`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `map`,
        path: `${__dirname}/src/images/map`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/images/logo`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hidden Acres RV Campground`,
        short_name: `Hidden Acres`,
        start_url: `/`,
        background_color: `#8bd8ed`,
        theme_color: `#8bd8ed`,
        display: `minimal-ui`,
        icon: `static/HiddenAcresRVCampgroundLogo1.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`average`, `prata\:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/'),
        },
      },
    },
    `gatsby-plugin-meta-redirect` // make sure to put last in the array
  ],
};
