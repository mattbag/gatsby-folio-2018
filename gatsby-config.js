module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    "gatsby-transformer-screenshot",
    "gatsby-transformer-yaml",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src",
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
