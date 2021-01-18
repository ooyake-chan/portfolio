import React from "react"

export default ()=>{
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
                <a href="{`/`}">トップページ /</a>
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
                <a href="{`/`}">ポートフォリオサイト</a>
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
                <a href="{`/`}">ポートフォリオサイト</a>
              </li>
              <li>
                <a href="{`/`}">ポートフォリオサイト</a>
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
        </div>
    )
}