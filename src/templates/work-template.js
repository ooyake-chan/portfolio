import React from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import  Img  from "gatsby-image"
import Toolmap from "../utils/toolMap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/work-other.scss"

export const query = graphql`
query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      title_sub
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
    }
    contentfulBlogPostWorkDataJsonNode {
        links {
          source
          target
        }
        nodes {
          id
          label
        }
      }
  }
`

const options = {
    renderNode: {
        [ BLOCKS.EMBEDDED_ASSET]: node => {
            const movie = (node.data.target.file.url).match(/mp4$/)
            if(movie){
                return <video src={node.data.target.file.url} autoPlay muted loop />
            }else{
                return <img src={node.data.target.file.url } alt=""/>
            }
        }
    }
}

export default ({ data })=>{
    const localMenu = (
        <ul>
        <li className="nav-local-active" id="local-summary">
          <a href="#work-summary">作品概要</a>
        </li>
        <li id="local-toolmap">
          <a href="#work-toolmap">ツールマップ</a>
        </li>
        <li id="local-detail">
          <a href="#work-detail">制作の目標・反省</a>
        </li>
        <li id="local-blog">
          <a href="#work-blog">制作の様子</a>
        </li>
      </ul>
    )

    return (
        <Layout local={ localMenu }>
            <SEO />
            <div className="wrapper-contents">
                <div className="work">
                <h2>works</h2>

                    <p>{data.contentfulBlogPost.title_sub || ""}</p>
                    <h3 id="work-summary">{data.contentfulBlogPost.title}</h3>
                    <time datatime={ data.contentfulBlogPost.publishData }>{ data.contentfulBlogPost.publishDateJP }</time>
                        <figure>
                            <Img 
                            className="eyecatch" 
                            fluid={ data.contentfulBlogPost.eyecatch.fluid } 
                            alt={ data.contentfulBlogPost.eyecatch.description}
                            style={{ height:"100%" }} 
                            />
                        </figure>
                    <div className="summary">
                        <div className="summary__list">
                            { renderRichText(data.contentfulBlogPost.information, {}) }
                        </div>
                    </div>
                    <hr />
                    <div className="toolmap">
                        <h4 id="work-toolmap">ツールマップ</h4>
                        <Toolmap data={data.contentfulBlogPostWorkDataJsonNode}/>
                    </div>
                    <hr />
                    <div className="detail">
                        { renderRichText(data.contentfulBlogPost.content, options) }
                    </div>
                </div>
                <hr />
                <div className="blog-inner">
                    <h3 id="work-blog">制作の様子<span>ブログに移動します</span></h3>
                    <article className="flex">

                        <div>
                            <time>2020.11.20</time>
                            <h1>ブログタイトル</h1>
                            <div className="category">
                                <p>web</p>
                            </div>
                            <img src="../images/heroImgClinic.png" alt="" />
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                            <a href="{`/`}">続きを読む</a>
                        </div>

                        <div>
                            <time>2020.11.20</time>
                            <h1>ブログタイトル</h1>
                            <div className="category">
                                <p>web</p>
                            </div>
                            <img src="../images/heroImgClinic.png" alt="" />
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                            <a href="{`/`}">続きを読む</a>
                        </div>

                        <div>
                            <time>2020.11.20</time>
                            <h1>ブログタイトル</h1>
                            <div className="category">
                                <p>web</p>
                            </div>
                            <img src="../images/heroImgClinic.png" alt="" />
                            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                            <a href="{`/`}">続きを読む</a>
                        </div>
                    </article>
                    <hr />
                </div>

                <div className="post-link">
                    <a href={`/`}>prev</a>
                    <a href={`/`}>next</a>
                </div>
            </div>
        </Layout>
    )
}