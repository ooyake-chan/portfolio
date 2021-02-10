import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS} from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import scrollTo from 'gatsby-plugin-smoothscroll'

import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/work-other.scss"

export const query = graphql`
query($id: String!) {
  contentfulBlogPost(id: { eq: $id }) {
      title
      publishDateJP:publishDate(formatString: "YYYY年MM月")
      publishDate
      eyecatch {
        fluid(maxWidth: 1200) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
        }
        description
      }
      information {
        raw
      }
      content {
        raw
        references{
            ... on ContentfulAsset {
            contentful_id
            __typename
              file{
                url
              }
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
      postsLink {
        title
        slug
        publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
        eyecatch {
          fixed {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`
const options = {
  renderNode: {
      [ BLOCKS.EMBEDDED_ASSET]: node => {
          return <Img fixed={node.data.target.fixed} />
      }
  }
}

const localMenu = (
    <ul>
    <li id="local-summary">
      <button onClick={()=> scrollTo("#other-summary")}>作品概要</button>
    </li>
    <li id="local-blog">
      <button onClick={()=> scrollTo("#other-blog")}>制作の様子</button>
    </li>
  </ul>
)

export default ({ data, pageContext })=>{
    return (
        <Layout local={ localMenu }>
            <SEO />
            <div className="wrapper-contents">
                <div className="other">
                    <h2>others</h2>
                    <p>{data.contentfulBlogPost.title_sub || ""}</p>
                    <h3 id="other-summary">{data.contentfulBlogPost.title}</h3>
                    <time datatime={ data.contentfulBlogPost.publishData }>{ data.contentfulBlogPost.publishDateJP }</time>
                    <figure>
                      {
                      data.contentfulBlogPost.eyecatch.fluid
                      ?<Img 
                      className="eyecatch" 
                      fluid={ data.contentfulBlogPost.eyecatch.fluid } 
                      alt={ data.contentfulBlogPost.eyecatch.description}
                      style={{ height:"100%" }} 
                      />
                      : ""
                      }
                    </figure>

                    <div className="summary">
                        <div className="summary__list">
                                { 
                                data.contentfulBlogPost.information
                                ?renderRichText(data.contentfulBlogPost.information, {})
                                : ""
                                 }
                        </div>
                    </div>
                    <div className="detail">
                        { 
                        data.contentfulBlogPost.content
                        ? renderRichText(data.contentfulBlogPost.content, options)
                        : "" 
                        }
                    </div>
              </div>
              <div className="blog-inner">
                  <h4 id="other-blog">制作の様子<span>ブログに移動します</span></h4>

                  <div className="summary flex">
                       { data.contentfulBlogPost.postsLink
                      ?data.contentfulBlogPost.postsLink.map(link =>(
                        <article key={`otherlink${link.slug}`}>
                            <time>{ link.publishDateJP }</time>
                            <h5>{link.title}</h5>
                            <figure>
                              <Img 
                              fixed={ link.eyecatch.fixed }
                              style={{ width:"100%", height:"100%" }}
                              />
                            </figure>
                            <Link to={`/blog/${link.slug}/`} >続きを読む</Link>
                        </article>
                      )) 
                      :<div><p>関連ページはありません</p></div>
                       }
                  </div>
              </div>
              <hr />
              <ul className="post-link">
                <li className="prev">
                      { pageContext.previous && (
                        <Link to={`/others/${pageContext.previous.slug}/`} >
                          <span>{ pageContext.previous.title }</span>
                        </Link>
                      ) }
                </li>
                <li className="next">
                      { pageContext.next && (
                        <Link to={`/others/${pageContext.next.slug}/`} >
                          <span>{ pageContext.next.title }</span>
                        </Link>
                      ) }
                </li>
                </ul>
            </div>
        </Layout>
    )
}