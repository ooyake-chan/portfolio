import React from "react"

export default function Home() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* <link rel="stylesheet" href="./doctor.css" /> */}
  {/* <link rel="stylesheet" href="./style.css" /> */}
  <title>Document</title>
  <header>
    <h1>miki's portfolio</h1>
    <nav className="nav__gloval">
      <ul className="nav__gloval--primary-list">
        <li>
          <a href="">トップページ /</a>
        </li>
        <li>
          <p>制作物 /</p>
          <ul className="nav__gloval--secondary-list">
            <li><a href="/work/slug">ポートフォリオサイト</a></li>
            <li><a href="/work/slug">ラビットテニススクール</a></li>
            <li><a href="/work/slug">ラジオ体操カード</a></li>
            <li><a href="/work/slug">麻雀計算機</a></li>
            <li><a href="/work/slug">Rcom.com</a></li>
            <li><a href="/work/slug">橋下クリニック</a></li>
          </ul>
        </li>
        <li>
          <p>その他の制作物 /</p>
          <ul className="nav__gloval--secondary-list">
            <li><a href="/work/slug">まるたろう君の1日</a></li>
            <li><a href="/work/slug">まるたろう君（クリスマス）</a></li>
            <li><a href="/work/slug">まるたろう君（不思議の国）</a></li>
            <li><a href="/work/slug">展示-はじめまして公園</a></li>
            <li><a href="/work/slug">gifアニメーション</a></li>
            <li><a href="/work/slug">LINEスタンプ</a></li>
          </ul>
        </li>
        <li><a href="/blog/">ブログ /</a></li>
      </ul>
    </nav>
    <nav className="nav__local">
      <ul>
        <li className="nav-local-active" id="local-hero">
          <a href="">ポートフォリオサイト</a>
        </li>
        <li id="local-rabbit">
          <a href="#summary-rabbit">ラビットテニススクール</a>
        </li>
        <li id="local-radio">
          <a href="#summary-radio">ラジオ体操カード</a>
        </li>
        <li id="local-mahjong">
          <a href="#summary-mahjong">麻雀計算機</a>
        </li>
        <li>
          <a href="">ポートフォリオサイト</a>
        </li>
        <li>
          <a href="">ポートフォリオサイト</a>
        </li>
        <li id="local-others">
          <a href="#home__others-id">others</a>
        </li>
        <li id="local-blog">
          <a href="#home__blog-id">blog</a>
        </li>
        <li id="local-about">
          <a href="#home__about-id">about me</a>
        </li>
      </ul>
    </nav>
  </header>
  {/* header */}
  {/* body */}
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
      <img src="/image/heroImgTennis.png" alt=""/>
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
          <svg id="tool-slug" />
        </div>
      </div>
      <a href="#">詳細ページ</a>
    </div>
    <div className="home__works-summary" id="summary-radio">
      <h3 className="floatleft">ラジオ体操カード</h3>
      <time className="clear">2021年1月</time>
      <img src="/image/heroImgTennis.png" alt="" />
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
      <img src="/image/heroImgTennis.png" alt="" />
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
        <img src="/image/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </div>
      <div className="home__others--summary">
        <time>2020年12月</time>
        <h3>作品タイトル</h3>
        <img src="/image/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </div>
      <div className="home__others--summary">
        <time>2020年12月</time>
        <h3>作品タイトル</h3>
        <img src="/image/otherMaru.JPG" alt="" />
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
        <img src="/image/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </article>
      <article className="home__blog--post">
        <time>2020年12月</time>
        <h3>ブログタイトル</h3>
        <a>category</a>
        <img src="/image/otherMaru.JPG" alt="" />
        <a href="#">詳細ページ</a>
      </article>
      <article className="home__blog--post">
        <time>2020年12月</time>
        <h3>ブログタイトル</h3>
        <a>category</a>
        <img src="/image/otherMaru.JPG" alt="" />
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
      <img src="/image/aboutme.jpg" alt="" />
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
  {/* body */}
  {/* footer */}
  <footer>
    <small>Copyright ©︎ ooyakechan works</small>
  </footer>
</div>

  )
}
