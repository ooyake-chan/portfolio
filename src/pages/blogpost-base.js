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
            <div className="blog-post">
                <div className="eyecatch">
                    <figure>
                        <img src="../images/aboutme.jpg" alt="" />
                    </figure>
                </div>
                <div className="wrapper-contents">
                    <h2>blog</h2>
                    <article className="wrapper-blogpost">
                        <div className="head">
                            <time>2020.11.20</time>
                            <h1>ブログタイトル</h1>
                            <div className="category flex">
                                <p>web</p>
                                <p>アプリ開発</p>
                            </div>
                        </div>
                        <div className="body">
                            <h2>見出し２</h2>
                            <p>ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、</p>
                            <h3>見出し３</h3>
                            <p>ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、</p>
                            <h4>見出し４</h4>
                            <p>ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、ブログ本文、</p>あ
                            <img src="./images/otherMaru.JPG"  alt="" />
                        </div>
                    </article>
                </div>
            </div>
            <Blogfooter />
        </Layout>
    )
}