import React from "react"
import { graphql } from "gatsby"

import  Img  from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: {eq: "aboutme.jpg"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data, location }) => {
  return (
<Layout >
<SEO pagepath={location.pathname}/>
  <div className="home__heroimage">
    <h2 id="hero-head">portfolio</h2>
    <div id="particle-canvas" />
  </div>
  {/* works */}
  <h2 id="works-head">works</h2>
  <div className="home__works" id="home__works-id">
    <div id="trigger-first" style={{height: '50vh'}} />
    <div className="home__works-summary" id="summary-rabbit">
      <h3 className="floatleft">ラビットテニススクール</h3>
      <time className="clear">2021年1月</time>
      <img src="/images/heroImgTennis.png" alt="" />
      <div className="wrap__works-summary">
        <div className="home__works-summary--info">
          <section>
            <h4>アドレス</h4>
            <a>http://www.rabbittennis.com</a>
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
            <a href="#">http://www.rabbittennis.com</a>
          </section>
          <section>
            <h4>コンセプト</h4>
            <p>あああああああああああああああえいおうえおあう</p>
          </section>
        </div>
        <div className="home__works-summary--toolmap">
          <svg id="tool-slug" />
        </div>
      </div>
      <a href="#">詳細ページ</a>
    </div>
    <div className="home__works-summary" id="summary-radio">
      <h3 className="floatleft">ラジオ体操カード</h3>
      <time className="clear">2021年1月</time>
      <img src="/images/heroImgTennis.png" alt="" />
      <div className="wrap__works-summary">
        <div className="home__works-summary--info">
          <section>
            <h4>アドレス</h4>
            <a href="#">http://www.rabbittennis.com</a>
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
            <a href="#">http://www.rabbittennis.com</a>
          </section>
          <section>
            <h4>コンセプト</h4>
            <p>あああああああああああああああえいおうえおあう</p>
          </section>
        </div>
        <div className="home__works-summary--toolmap">
          {/* <svg id="tool-slug"></svg> */}
        </div>
      </div>
      <a href="#">詳細ページ</a>
    </div>
    <div className="home__works-summary" id="summary-mahjong">
      <h3 className="floatleft">ラビットテニススクール</h3>
      <time className="clear">2021年1月</time>
      <img src="/images/heroImgTennis.png" alt="" />
      <div className="wrap__works-summary">
        <div className="home__works-summary--info">
          <section>
            <h4>アドレス</h4>
            <a href="#">http://www.rabbittennis.com</a>
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
            <a href="#">http://www.rabbittennis.com</a>
          </section>
          <section>
            <h4>コンセプト</h4>
            <p>あああああああああああああああえいおうえおあう</p>
          </section>
        </div>
        <div className="home__works-summary--toolmap">
          {/* <div id="tool-slug"></div> */}
        </div>
      </div>
      <a href="#">詳細ページ</a>
    </div>
  </div>
  {/* works */}
  {/* others */}
  <h2 id="others-head">others</h2>
  <div className="home__others" id="home__others-id">
    <div id="trigger-second" />
    <div className="wrap__others">
      <div className="home__others--summary">
        <time>2020年12月</time>
        <h3>作品タイトル</h3>
        <img src="/images/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </div>
      <div className="home__others--summary">
        <time>2020年12月</time>
        <h3>作品タイトル</h3>
        <img src="/images/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </div>
      <div className="home__others--summary">
        <time>2020年12月</time>
        <h3>作品タイトル</h3>
        <img src="/images/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </div>
    </div>
  </div>
  {/* others */}
  {/* blog */}
  <h2 id="blog-head">blog</h2>
  <div className="home__blog" id="home__blog-id">
    <div id="trigger-third" />
    <div className="wrap__blog">
      <article className="home__blog--post">
        <time>2020年12月</time>
        <h3>ブログタイトル</h3>
        <a>category</a>
        <img src="/images/otherMaru.JPG" alt="" />
        <a >詳細ページ</a>
      </article>
      <article className="home__blog--post">
        <time>2020年12月</time>
        <h3>ブログタイトル</h3>
        <a>category</a>
        <img src="/images/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </article>
      <article className="home__blog--post">
        <time>2020年12月</time>
        <h3>ブログタイトル</h3>
        <a>category</a>
        <img src="/images/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </article>
    </div>
    <a href="#">ブログトップページへ</a>
  </div>
  <h2 id="about-head" className="home__about--headbg">about me</h2>
  <div id="trigger-fourth" />
  <div className="home__about--bg">
    <div className="home__about" id="home__about-id">
      <h3>村松美紀</h3>
      <p>1992.11.5</p>
      <div className="about-img">
        <Img fluid={ data.file.childImageSharp.fluid } />
        </div>
      <div className="wrap__about">
        <div className="home__about--info">
          <section>
            <h4>略歴</h4>
            <ul>
              <li>1992年　神奈川県生まれ千葉県育ち</li>
              <li>2015年　多摩美術大学情報デザイン学科情報デザインコース</li>
            </ul>
          </section>
          <section>
            <h4>好きなこと</h4>
            <p>あいうえおあいうえお</p>
          </section>
          <section>
            <h4>好きな言葉</h4>
            <p>あいうえおあいうえお</p>
          </section>
          <section>
            <h4>モットー</h4>
            <p>あいうえおあいうえお</p>
          </section>
        </div>
        <div className="home__about--aboutmap">
          <div id="aboutmap" />
        </div>
      </div>
    </div>
  </div>
  </Layout>

  )
}
