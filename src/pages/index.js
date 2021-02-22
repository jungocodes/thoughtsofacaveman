import React from 'react'
import { graphql } from 'gatsby'

const index = ({data}) => {

    const siteTitle =data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMdx.nodes
    return (
        <div>
            <h1 >Blog Posts</h1>
            {/* Looping through the post and displaying them on the frontend */}
            {posts.map((post) => {
                // If there is no title on the post use the slug as the title
                const title = post.frontmatter.title || post.fields.slug

                return(
                    <div  className='card'>
                        <h1 className='card-title'>{title}</h1>
                        <p  className='card-date'>{post.frontmatter.date}</p>
                        <p  className='card-description' >{post.frontmatter.description}</p>
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