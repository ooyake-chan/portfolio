import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import scrollTo from 'gatsby-plugin-smoothscroll'

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
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5d23600... feat:メタデータの設定
        description
        file {
          details {
            image {
              width
              height
<<<<<<< HEAD
            }
          }
          url
        }
>>>>>>> 5857e4e... fix:画像の切り取りサイズ・動画のコントロールボタンの追加
=======
      }
          }
          url
        }
>>>>>>> 5d23600... feat:メタデータの設定
      }
      information {
        raw
      }
      concept{
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
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      postsLink {
        title
        slug
        publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
        eyecatch {
          fluid( maxWidth:340 ) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      workData {
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
  }
`

const options = {
    renderNode: {
        [ BLOCKS.EMBEDDED_ASSET]: node => {
            const movie = (node.data.target.file.url).match(/mp4$/)
            if(movie){
                return <video src={node.data.target.file.url} autoPlay muted loop controls />
            }else{
                return <img src={node.data.target.file.url } alt=""/>
            }
        }
    }
}

export default ({ data, pageContext, location })=>{
    const localMenu = (
        <ul>
        <li  id="local-summary">
          <button onClick={()=> scrollTo("#work-summary")}>作品概要</button>
        </li>
        <li id="local-toolmap">
          <button onClick={()=> scrollTo("#work-toolmap")}>ツールマップ</button>
        </li>
        <li id="local-detail">
          <button onClick={()=> scrollTo("#work-detail")}>制作の目標・反省</button>
        </li>
        <li id="local-blog">
          <button onClick={()=> scrollTo("#work-blog")}>制作の様子</button>
        </li>
      </ul>
    )

    return (
        <Layout local={ localMenu }>
            <SEO
              pagetitle={data.contentfulBlogPost.title}
              pagedesc={`${data.contentfulBlogPost.title_sub} `|| ""}
              pagepath={location.pathname}
              blogimg={`https:${data.contentfulBlogPost.eyecatch.file.url}`}
              pageimgw={data.contentfulBlogPost.eyecatch.file.details.image.width}
              pageimgh={data.contentfulBlogPost.eyecatch.file.details.image.height}
            />
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
                            style={{ width:"100%" }} 
                            />
                        </figure>
                    <div className="summary">
                      <div className="flex">
                        <div className="summary--info">
                            { renderRichText(data.contentfulBlogPost.information, {}) }
                        </div>
                        <div className="summary--concept">
                            { renderRichText(data.contentfulBlogPost.concept, {}) }
                    </div>
                      </div>
                    </div>
                    <div className="toolmap">
                        <h4 id="work-toolmap">ツールマップ</h4>
                        <Toolmap data={data.contentfulBlogPost.workData} id="work" />
                    </div>
                    <div className="detail" id="work-detail">
                        { renderRichText(data.contentfulBlogPost.content, options) }
                    </div>
                </div>
                <div className="blog-inner">
                    <h4 id="work-blog">制作の様子<span>ブログに移動します</span></h4>
                    <div className="summary flex">
                      { data.contentfulBlogPost.postsLink
                      ?data.contentfulBlogPost.postsLink.map(link =>(
                        <article key={`worklink${link.slug}`}>
                            <time>{ link.publishDateJP }</time>
                            <h5>{link.title}</h5>
                            <figure>
                              <Img 
                              fluid={ link.eyecatch.fluid }
                              style={{ height:"100%" }}
                              />
                            </figure>
                            <Link to={`/blog/${link.slug}/`} >続きを読む</Link>
                        </article>
                      )) 
                      :<div><p>関連ページはありません</p></div>
                       }
                    </div>
                    <hr />
                </div>

                <ul className="post-link">
                  <li className="prev">
                      { pageContext.previous && (
                        <Link to={`/works/${pageContext.previous.slug}/`} >
                          <span>{ pageContext.previous.title }</span>
                        </Link>
                      ) }
                  </li>
                  <li className="next">
                      { pageContext.next && (
                        <Link to={`/works/${pageContext.next.slug}/`} >
                          <span>{ pageContext.next.title }</span>
                        </Link>
                      ) }
                  </li>
                </ul>
            </div>
        </Layout>
    )
}