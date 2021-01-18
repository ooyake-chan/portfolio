import React from "react"
// import { graphql } from "gatsby"

// import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ()=>{
    return (
        <Layout>
            <SEO />
            <h2>others</h2>
            <div className="wrapper-other">

                <h3>作品タイトル</h3>
                <time>2020.11</time>
                <img src="../images/heroImgClinic.png" alt="" />

                <div className="section-other">
                    <div className="section-other__list">
                        <section>
                            <h4>使用画材</h4>
                            <p>アクリルガッシュ</p>
                        </section>
                        <section>
                            <h4>サイズ</h4>
                            <p>332×242</p>
                        </section>
                    </div>
                    <div className="section-other__concept">
                        <section>
                            <h4>コメント</h4>
                            <p>あああああああああああああああえいおうえおあう</p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="wrapper-other">
                <h4>制作の様子</h4>
                <small>ブログに移動します</small>
                <article className="flex">

                    <div>
                        <time>2020.11.20</time>
                        <h1>ブログタイトル</h1>
                        <div className="category">
                            <p>web</p>
                        </div>
                        <img src="../images/heroImgClinic.png" alt="" />
                        <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                        <a href=" {`/`}">続きを読む</a>
                    </div>

                    <div>
                        <time>2020.11.20</time>
                        <h1>ブログタイトル</h1>
                        <div className="category">
                            <p>web</p>
                        </div>
                        <img src="../images/heroImgClinic.png" alt="" />
                        <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                        <a href=" {`/`}">続きを読む</a>
                    </div>

                    <div>
                        <time>2020.11.20</time>
                        <h1>ブログタイトル</h1>
                        <div className="category">
                            <p>web</p>
                        </div>
                        <img src="../images/heroImgClinic.png" alt="" />
                        <p>aaaaaaaaaaaaaaaaaaaaaa</p>
                        <a href=" {`/`}">続きを読む</a>
                    </div>
                </article>

            </div>

            <div className="wrapper-other__post-link">
                <a href={`/`}>prev</a>
                <a href={`/`}>next</a>
            </div>
        </Layout>
    )
}