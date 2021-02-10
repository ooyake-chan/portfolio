import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogfooter from "../components/blogfooter"
import "../styles/blog.scss"

export const query = graphql`
query($catid: String!, $skip: Int!, $limit: Int!) {
    blog:allContentfulBlogPost(
        sort: {order: DESC, fields: publishDate}, 
        skip: $skip, 
        limit: $limit,
        filter: {category: {elemMatch: {id: {eq: $catid }}}}) {
      edges {
        node {
          id
          title
          publishDate(formatString: "YYYY年MM月DD日")
          slug
          eyecatch {
            fluid(maxWidth: 1000) {
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
const options = {
    renderNode: {
        [ BLOCKS.HEADING_4]: (node, children) => (
        <p>{ children }</p>
            ),
        [ BLOCKS.HEADING_5]: (node, children) => (
        <p>{ children }</p>
        ),
        [ BLOCKS.HEADING_6]: (node, children) => ( 
        <p>{ children }</p>
        ),
    }
}

export default({data, pageContext})=>{
    return (
        <Layout>
            <SEO />
            <div className="blog-top">
                <div className="wrapper-contents">
                     <h2>blog</h2>
                     <div className="cat-heading">
                        <h3>カテゴリー検索</h3>
                        <p>カテゴリー<span>{ pageContext.catname }</span>の記事を表示中</p>
                     </div>
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
                                        <div className="desc">
                                            {/* <p>{ renderRichText( blogsum.node.content,options ) }</p> */}
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
                                    ? `/cat/${ pageContext.catslug }/`
                                    : `/cat/${ pageContext.catslug }/${pageContext.currentPage - 1}/`
                                }>
                                    前のページ
                                </Link>
                            )}
                        </li>
                        <li className="next" >
                            { !pageContext.isLast && (
                                <Link 
                                to={`/cat/${ pageContext.catslug }/${pageContext.currentPage + 1}/`}>
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