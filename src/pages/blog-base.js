import React from "react"
// import { graphql } from "gatsby"

// import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default()=>{
    return (
        <Layout>
            <SEO />
            <h2>blog</h2>
            <article className="flex">
                <div>
                    <img src="../images/otherMaru.JPG"  alt=""/>
                </div>
                <div>
                    <time>2020.11.20</time>
                    <h3>ブログタイトル</h3>
                    <div className="category">
                        <p>web</p>
                        <p>アプリ開発</p>
                    </div>
                    <p>
                        ああああああああああああああ
                    </p>
                    <a href="{`/`}">続きを読む</a>
                </div>
            </article>

            <article className="flex">
                <div>
                    <img src="../images/otherMaru.JPG"  alt=""/>
                </div>
                <div>
                    <time>2020.11.20</time>
                    <h3>ブログタイトル</h3>
                    <div className="category">
                        <p>web</p>
                        <p>アプリ開発</p>
                    </div>
                    <p>
                        ああああああああああああああ
                    </p>
                    <a href="{`/`}">続きを読む</a>
                </div>
            </article>

            <div className="wrapper-work__post-link">
                <a href={`/`}>prev</a>
                <a href={`/`}>next</a>
            </div>

            <div className="footer-blog">
                <div className="footer-blog__menu">
                    <h3>カテゴリー一覧</h3>
                    <a href="{`/`}">HTML5</a>/
                    <a href="{`/`}">HTML5</a>/
                    <a href="{`/`}">HTML5</a>/
                </div>
                <div className="footer-blog__menu">
                    <h3>月別記事一覧</h3>
                    <h4>2020年</h4>
                    <a href="{`/`}">1月</a>/
                    <a href="{`/`}">1月</a>/
                    <a href="{`/`}">1月</a>/
                </div>
            </div>
        </Layout>
    )
}