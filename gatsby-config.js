const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'I AM MATTHIAS',
    description: 'A personal portfolio project',
    siteUrl: 'https://iammatthias.com',
    author: 'Matthias Jordan',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Photography',
        slug: '/photography/',
      },
      {
        name: 'Blog',
        slug: '/blog/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    postsPerFirstPage: 8,
    postsPerPage: 8,
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-feed-generator',
      options: {
        generator: `GatsbyJS`,
        rss: false, // Set to true to enable rss generation
        json: true, // Set to true to enable json feed generation
        siteQuery: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `,
        feeds: [
          {
            name: 'feed',
            query: `
            {
              allContentfulPost(sort: { fields: [updatedAt], order: DESC }, limit: 2) {
                edges {
                  node {
                    title
                    id
                    slug
                    internal {
                      type
                    }
                    publishDate(formatString: "MMMM DD, YYYY")
                  }
                }
              }
              allContentfulPhotography(sort: { fields: [updatedAt], order: DESC }, limit: 2) {
                edges {
                  node {
                    title
                    id
                    slug
                    internal {
                      type
                    }
                    updatedAt(formatString: "MMMM DD, YYYY")
                  }
                }
              }
            }
            `,
            normalize: ({
              query: { site, allContentfulPost, allContentfulPhotography },
            }) => {
              let posts = allContentfulPost.edges.map(edge => {
                return {
                  title: edge.node.title,
                  slug: edge.node.slug,
                  url: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  content: edge.node.internal.type,
                  date: edge.node.publishDate,
                }
              })
              let photos = allContentfulPhotography.edges.map(edge => {
                return {
                  title: edge.node.title,
                  slug: edge.node.slug,
                  url:
                    site.siteMetadata.siteUrl +
                    '/photography/' +
                    edge.node.slug,
                  content: edge.node.internal.type,
                  date: edge.node.updatedAt,
                }
              })
              let combined = [...photos, ...posts].sort((a, b) => {
                return new Date(a) - new Date(b)
              })
              return combined
            },
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',

    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-printer`,
      options: {
        puppeteerLaunchOptions: {
          headless: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:400,900`,
          `Crimson Text`,
          `Inconsolata`,
          `Pacifico`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-emojis`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: e77zn2192gpe,
        accessToken: CFPAT-hIVNDG0xK0dHVPkzBvg6OptNA-xq2mMBqeAijqXVKWI,
        host: process.env.CONTENTFUL_HOST,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT,
        devKey: process.env.SEGMENT,
        trackPage: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'I AM MATTHIAS',
        description: 'A personal portfolio project',
        short_name: 'IAM',
        start_url: '/',
        background_color: '#140D00',
        theme_color: '#140D00',
        display: 'fullscreen',
        icon: './static/images/favicon.png',
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-schema-snapshot`,
    //   options: {
    //     path: `./src/gatsby/schema/schema.gql`,
    //     update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
    //   },
    // },
    'gatsby-plugin-netlify',
  ],
}
