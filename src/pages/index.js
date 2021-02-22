import React from 'react'
import { graphql } from 'gatsby'

const index = ({data}) => {

    const siteTitle =data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMdx.nodes
    return (
        <div>
            <h1>Blog Posts</h1>
            {/* Looping through the post and displaying them on the frontend */}
            {posts.map((post) => {
                // If there is no title on the post use the slug as the title
                const title = post.frontmatter.title || post.fields.slug

                return(
                    <div>
                        <h1>{title}</h1>
                        <p>{post.frontmatter.date}</p>
                        <p>{post.frontmatter.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default index

export const pageQuery = graphql`
{
    site {
        id
        siteMetadata {
          title
          description
          siteUrl
        }
    }
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
          excerpt
          slug
          frontmatter {
            date(formatString: "D0 MMMM YYYY")
            title
            description
          }
        }
    }
    
}


`