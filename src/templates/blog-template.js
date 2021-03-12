import React from "react"
import { graphql, Link } from "gatsby"

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
            fluid(maxWidth: 640, quality: 90){
                ...GatsbyContentfulFluid_withWebp
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

export default({data, pageContext, location})=>{
    return (
        <Layout>
            <SEO 
                pagetitle="ブログ"
                pagedesc="mikisPortfolioのブログ"
                pagepath={location.pathname}
            />
            <div className="blog-top">
                <div className="wrapper-contents">
                     <h2>blog</h2>

                    { data.blog.edges.map((blogsum)=>(
                        <div key={ blogsum.node.id }>
                            <article className="flex" >
                                <Link to={`/blog/${ blogsum.node.slug }`} >
                                <figure>
                                        {
                                            blogsum.node.eyecatch
                                                ?<Img 
                                                fluid={ blogsum.node.eyecatch.fluid } 
                                                alt={ blogsum.node.eyecatch.description }
                                                style={{width:"100%",height:"100%"}} />
                                                : "no image"
                                        }
                                    </figure>
                                </Link>
                                <div className="body">
                                    <div>
                                        <time>{ blogsum.node.publishDate }</time>
                                        <h3>{ blogsum.node.title }</h3>
                                        <hr/>
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