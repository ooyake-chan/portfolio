import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogfooter from "../components/blogfooter"

import "../styles/blog.scss"

import "../../node_modules/highlight.js/styles/shades-of-purple.css"
import hljs from "highlight.js"

export const query = graphql`
query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      eyecatch {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
            }
            fixed(width: 500) {
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
          fixed(width: 340) {
            base64
            src
            srcSet
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
        [ BLOCKS.EMBEDDED_ASSET]: node => (
            <a href={ node.data.target.file.url } target="blank"><Img fixed={node.data.target.fixed} /></a>
        )
    },
    renderMark: {
      [ MARKS.CODE ]: children => (
        <pre><code>{children}</code></pre>
      )
    },
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
}

  useEffect(()=>{
    hljs.highlightAll()
  })

    return (
        <Layout>
            <SEO
              pagetitle={data.contentfulBlogPost.title}
              pagedesc={`${documentToPlainTextString(
                data.contentfulBlogPost.content.json
              ).slice(0, 70)}…`}
              pagepath={location.pathname}
              blogimg={`https:${data.contentfulBlogPost.eyecatch.file.url}`}
              pageimgw={data.contentfulBlogPost.eyecatch.file.details.image.width}
              pageimgh={data.contentfulBlogPost.eyecatch.file.details.image.height}
            />
            <div className="blog-post">
                <div className="eyecatch">
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
                </div>
                <div className="wrapper-contents">
                    <h2>blog</h2>
                    <article className="wrapper-blogpost">
                        <div className="head">
                        <time datatime={ data.contentfulBlogPost.publishData }>{ data.contentfulBlogPost.publishDateJP }</time>
                            <h3>{data.contentfulBlogPost.title}</h3>
                        </div>
                        <div className="body">
                        { 
                        data.contentfulBlogPost.content
                        ? renderRichText(data.contentfulBlogPost.content, options)
                        : "" 
                        }
                        </div>
                    </article>
                    <div>
                      <h4>関連記事</h4>
                      <div className="relation flex">
                        { data.contentfulBlogPost.postsLink
                        ?data.contentfulBlogPost.postsLink.map(link =>(
                          <article key={`postlink${link.slug}`}>
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
                        :<div><p>関連記事はありません</p></div>
                        }
                      </div>
                    </div>
                    <hr/>
                <ul className="post-link">
                  <li className="prev">
                    { pageContext.previous && (
                      <Link to={`/blog/${pageContext.previous.slug}/`} >
                        <span>{ pageContext.previous.title }</span>
                      </Link>
                    ) }
                  </li>
                  <li className="next">
                    { pageContext.next && (
                      <Link to={`/blog/${pageContext.next.slug}/`} >
                        <span>{ pageContext.next.title }</span>
                      </Link>
                    ) }
                  </li>
                </ul>
              </div>
            </div>
            <Blogfooter />
        </Layout>
    )
}