module.exports = {
    siteMetaData: {
        title: 'Thoughts of a Caveman',
        author: {
            name: 'Jungo',
            summary: 'A collection of thoughts',
        },
        description: 'A collection of thoughts about life as a man observing his life',
        siteUrl: 'https://localhost:8000',
        social: {
            twitter: 'jungowrites'
        }

    },
    plugins: [
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
            }
        },ß
        {
            resolve: 'batsby-source-filesystem',
            options: {
                path: `${__dirname}/blog`,
                name: 'blog'
            }
        }
    ]
}