import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogfooter from "../components/blogfooter"
import "../styles/blog.scss"

export const query = graphql`
query($skip: Int!, $limit: Int!) {
    blog:allContentfulBlogPost(
        sort: {order: DESC, fields: publishDate}, 
        skip: $skip, 
        limit: $limit,
        filter: {category: {elemMatch: {categorySlug: {eq: "blog"}}}}) {
      edges {
        node {
          id
          title
          publishDate(formatString: "YYYY年MM月DD日")
          slug
          eyecatch {
            fixed(width: 340) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
            }
            description
          }
          content {
            raw
          }
        }
      }
      totalCount
    }
  }
`

export default({data, pageContext})=>{
    return (
        <Layout>
            <SEO />
            <div className="blog-top">
                <div className="wrapper-contents">
                     <h2>blog</h2>
                    { data.blog.edges.map((blogsum)=>(
                        <div key={ blogsum.node.id }>
                                <figure>
                                    <Img 
                                    fixed={ blogsum.node.eyecatch.fixed } 
                                    alt={ blogsum.node.eyecatch.description }
                                    style={{width:"340px",height:"100%"}} />
                                </figure>
                                <div className="body">
                                    <div>
                                        <time>{ blogsum.node.publishDate }</time>
                                        <h3>{ blogsum.node.title }</h3>
                                        <hr/>
                                        <div className="desc">
                                            { renderRichText( blogsum.node.content,{} ) }
                                        </div>
                                    </div>
                                    <Link to={`/blog/${ blogsum.node.slug }`} >続きを読む</Link>
                                </div>
                            </article>
                            <hr/>
                        </div>
                    )) }

                    < ul className="pagenation">
                        <li className="prev" >
                            { !pageContext.isFirst && (
                                <Link to={
                                    pageContext.currentPage === 2
                                    ? `/blog/`
                                    : `/blog/${pageContext.currentPage - 1}/`
                                }>
                                    前のページ
                                </Link>
                            )}
                        </li>
                        <li className="next" >
                            { !pageContext.isLast && (
                                <Link 
                                to={`/blog/${pageContext.currentPage + 1}/`}>
                                    次のページ
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <Blogfooter />
        </Layout>
    )
}