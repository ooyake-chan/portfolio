import React from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogfooter from "../components/blogfooter"

import "../styles/blog.scss"

export const query = graphql`
query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
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

export default({ data })=>{
    return (
        <Layout>
            <SEO />
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
                            <h1>{data.contentfulBlogPost.title}</h1>
                            <div className="category flex">
                                <p>web</p>
                                <p>アプリ開発</p>
                            </div>
                        </div>
                        <div className="body">
                        { 
                        data.contentfulBlogPost.content
                        ? renderRichText(data.contentfulBlogPost.content, options)
                        : "" 
                        }
                        </div>
                    </article>
                    <hr />
                </div>
            </div>
            <Blogfooter />
        </Layout>
    )
}