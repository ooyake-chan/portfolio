import React from "react"
// import { graphql } from "gatsby"

// import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ()=>{
    return (
        <Layout>
            <SEO />
            <h2>works</h2>
            <div className="wrapper-work">

                <p>架空のクリニックサイト</p>
                <h3>橋下駅前クリニック</h3>
                <time>2020.4</time>
                <img src="../images/heroImgClinic.png" alt="" />

                <div className="section-work">
                    <div className="section-work__list">
                        <section>
                            <h4>アドレス</h4>
                            <a href="http://www.rabbittennis.com">http://www.rabbittennis.com</a>
                        </section>
                        <section>
                            <h4>開発環境</h4>
                            <ul>
                            <li>macPC</li>
                            <li>VScode</li>
                            <li>ReactCreateApp</li>
                            </ul>
                        </section>
                        <section>
                            <h4>その他使用ツール</h4>
                            <ul>
                            <li>macPC</li>
                            <li>VScode</li>
                            <li>ReactCreateApp</li>
                            </ul>
                        </section>
                        <section>
                            <h4>デザイン制作</h4>
                            <ul>
                            <li>macPC</li>
                            <li>VScode</li>
                            <li>ReactCreateApp</li>
                            </ul>
                        </section>
                        <section>
                            <h4>主な学習ソース</h4>
                            <ul>
                            <li>macPC</li>
                            <li>VScode</li>
                            <li>ReactCreateApp</li>
                            </ul>
                        </section>
                        <section>
                            <h4>Github</h4>
                            <a href="{`/`}">http://www.rabbittennis.com</a>
                        </section>
                    </div>

                    <div className="section-work__concept">
                        <section>
                            <h4>コンセプト</h4>
                            <p>あああああああああああああああえいおうえおあう</p>
                        </section>
                    </div>
                </div>

                <div className="toolmap-work">
                    <h4>ツールマップ</h4>
                    <svg id="toolmap-work__SVG"></svg>
                </div>

                <div className="contents-work">
                    <section>
                        <h4>制作の目標・目的</h4>
                        <p>独学で勉強を始めてから最初に制作したwebサイトです。制作の間に意識していたことは、①制作工程の全体像を掴むこと、②どんなwebサイトにも通じる土台となる考え方を探すことです。①はweb制作会社や、フリーランスのweb制作者の技術ブログを参考に、クライアントからのヒアリングから始まる納品までのフローを自分なりに考え、各工程をイメージしながら制作しました。②についてはアクセシビリティの考慮、SEO対策や支援技術の為にセマンティックなHTML文書を書くことが重要だと考え、HTML要素を正しく選択して使えるよう注意してコーディングしました</p>
                    </section>

                    <section>
                        <h4>制作のポイント</h4>
                        <div className="flex">
                            <div>
                                <img src="../images/heroImgClinic.png"  alt="" />
                                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                            <div>
                                <img src="../images/heroImgClinic.png" alt="" />
                                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4>制作後の反省点</h4>
                        <h5>デザイン面</h5>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <h5>コーディング面</h5>
                        <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </section>

                </div>
            </div>

            <div className="wrapper-work">
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

            <div className="wrapper-work__post-link">
                <a href={`/`}>prev</a>
                <a href={`/`}>next</a>
            </div>
        </Layout>
    )
}