import React from "react"
// import { graphql } from "gatsby"

// import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/work-other.scss"

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

export default ()=>{
    return (
        <Layout local={ localMenu }>
            <SEO />
            <div className="wrapper-contents">
                <div className="other">
                    <h2>others</h2>

                        <h3 id="other-summary">作品タイトル</h3>
                        <time>2020.11</time>
                        <img src="../images/heroImgClinic.png" alt="" />

                        <div className="summary">
                            <div className="summary__list">
                                <section>
                                    <h4>使用画材</h4>
                                    <p>アクリルガッシュ</p>
                                </section>
                                <section>
                                    <h4>サイズ</h4>
                                    <p>332×242</p>
                                </section>
                            </div>
                            <div className="summary__concept">
                                <section>
                                    <h4>コメント</h4>
                                    <p>あああああああああああああああえいおうえおあう</p>
                                </section>
                            </div>
                        </div>


                </div>
                        <div className="blog-inner">
                            <h3 id="other-blog">制作の様子<span>ブログに移動します</span></h3>
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
                        </div>

                    <div className="post-link">
                        <a href={`/`}>prev</a>
                        <a href={`/`}>next</a>
                    </div>
            </div>
        </Layout>
    )
}