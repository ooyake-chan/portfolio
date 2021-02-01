import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS} from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
    <li className="nav-local-active" id="local-summary">
      <a href="#other-summary">作品概要</a>
    </li>
    <li id="local-blog">
      <a href="#other-blog">制作の様子</a>
    </li>
  </ul>
)

export default ({ data })=>{
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
                      : "ないよ"
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
              <hr />
              <div className="blog-inner">
                  <h3 id="other-blog">制作の様子<span>ブログに移動します</span></h3>

                  <div className="summary flex">
                       { data.contentfulBlogPost.postsLink
                      ?data.contentfulBlogPost.postsLink.map(link =>(
                        <article>
                            <time>{ link.publishDateJP }</time>
                            <h1>{link.title}</h1>
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
                    <div className="post-link">
                        <a href={`/`}>prev</a>
                        <a href={`/`}>next</a>
                    </div>
            </div>
        </Layout>
    )
}