import React from "react"
// import { graphql } from "gatsby"

// import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogfooter from "../components/blogfooter"
import "../styles/blog.scss"

export default()=>{
    return (
        <Layout>
            <SEO />
            <div className="blog-top">
                <div className="wrapper-contents">
                     <h2>blog</h2>
                    <article className="flex">
                        <div>
                            <img src="../images/otherMaru.JPG"  alt=""/>
                        </div>
                        <div className="body">
                            <div>
                                <time>2020.11.20</time>
                                <h1>ブログタイトル</h1>
                                <div className="category flex">
                                    <p>web</p>
                                    <p>アプリ開発</p>
                                </div>
                                <p>
                                    これはダミーテキストです。ブログの内容。これはダミーテキストです。ブログの内容。これはダミーテキストです。ブログの内容。
                                </p>
                            </div>
                            <a href="{`/`}">続きを読む</a>
                        </div>
                    </article>
                    
                    <article className="flex">
                        <div>
                            <img src="../images/otherMaru.JPG"  alt=""/>
                        </div>
                        <div className="body">
                            <div>
                                <time>2020.11.20</time>
                                <h1>ブログタイトル</h1>
                                <div className="category flex">
                                    <p>web</p>
                                    <p>アプリ開発</p>
                                </div>
                                <p>
                                    これはダミーテキストです。ブログの内容。これはダミーテキストです。ブログの内容。これはダミーテキストです。ブログの内容。
                                </p>
                            </div>
                            <a href="{`/`}">続きを読む</a>
                        </div>
                    </article>


                </div>
            </div>
            <Blogfooter />
        </Layout>
    )
}