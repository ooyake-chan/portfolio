import React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import ScrollMagic from "ScrollMagic"
import scrollTo from 'gatsby-plugin-smoothscroll'

import  Img  from "gatsby-image"
import Toolmap from "../utils/toolMap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"

export const query = graphql`
  query {
    file(relativePath: {eq: "aboutme.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
    works: allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {category: {elemMatch: {category: {}, categorySlug: {eq: "works"}}}}) {
      edges {
        node {
          id
          slug
          title
          title_sub
          publishDate(formatString: "YYYY年MM月")
          information {
            raw
          }
          eyecatch {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          childContentfulBlogPostWorkDataJsonNode {
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
    }
    others:allContentfulBlogPost(filter: {category: {elemMatch: {categorySlug: {eq: "others"}}}}) {
      edges {
        node {
          id
          title
          publishDate(formatString: "YYYY年MM月")
          slug
          eyecatch {
            fluid(maxWidth: 1000){
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    blog: allContentfulBlogPost(filter: {category: {elemMatch: {categorySlug: {eq: "blog"}}}}, sort: {order: DESC, fields: publishDate}, limit: 3) {
      edges {
        node {
          id
          title
          publishDate(formatString: "YYYY年MM月DD日")
          slug
          eyecatch {
            fluid(maxWidth: 1000){
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ({ data, location }) => {

  // propsローカルメニュー
  const localMenu = (data) => {
    return (
    <ul>
    { data.edges.map(local=>(
      <li id={`local-${local.node.slug}`} key={local.node.id}>
      <button onClick={()=> scrollTo(`#summary-${local.node.slug}`)}>{local.node.title}</button>
    </li>
    ))}
    <li id="local-others" key="local-others">
      <button onClick={()=> scrollTo("#home__others-id")}>others</button>
    </li>
    <li id="local-blog" key="local-blog">
      <button onClick={()=> scrollTo("#home__blog-id")}>blog</button>
    </li>
    <li id="local-about" key="local-about">
      <button onClick={()=> scrollTo("#home__about-id")}>about</button>
    </li>
  </ul>
    )}

    // ScrollMagic
    let controller = new ScrollMagic.Controller()
    let navId = data.works.edges
    
    const length = data.works.edges.length
    console.log(navId, length)
    
    navId.forEach(element => {
      const slug = element.node.slug
    
      new ScrollMagic.Scene({triggerElement: `#summary-${slug}`, duration:"100%"})
      .setClassToggle(`#local-${slug}`, "nav-local-active")
      .addTo(controller);
    });
    new ScrollMagic.Scene({triggerElement: "#home__others-id", duration:"100%"})
    .setClassToggle("#local-others", "nav-local-active")
    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#home__blog-id", duration:"100%"})
    .setClassToggle("#local-blog", "nav-local-active")
    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#home__about-id", duration:"100%"})
    .setClassToggle("#local-about", "nav-local-active")
    .addTo(controller);

  return (
<Layout local={ localMenu(data.works) }>
<SEO pagepath={location.pathname}/>
  <div className="home__heroimage">
    <h2 id="hero-head">portfolio</h2>
    <div id="particle-canvas" />
  </div>
  {/* worksここから */}
  <h2 id="works-head" data-sal="slide-left" data-sal-duration="500">works</h2>
  <div className="home__works" id="home__works-id">

      {data.works.edges.map(sum=>(
        <div 
        className="home__works-summary" 
        id={`summary-${sum.node.slug}`} 
        key={sum.node.id}>
          <p>{sum.node.title_sub || ""}</p>
          <h3 data-sal="slide-up">{sum.node.title}</h3>
          <time>{sum.node.publishDate}</time>
          <figure data-sal="slide-up">
              <Img 
              className="eyecatch" 
              fluid={ sum.node.eyecatch.fluid } 
              style={{ width:"100%" }} 
              alt={ sum.node.eyecatch.description}
              />
          </figure>
          <div className="wrap__works-summary">
            <div className="home__works-summary--info">
            { renderRichText( sum.node.information, {}) }
            </div>
            <div className="home__works-summary--toolmap">
            <Toolmap data={sum.node.childContentfulBlogPostWorkDataJsonNode} id={ sum.node.slug }/>
            </div>
          </div>
          <div className="button">
             <div className="button--plime" ><Link to={`/works/${sum.node.slug}/`} >詳細ページへ</Link></div>
          </div>
        </div>
        ))
      }

  </div>
  {/* worksここまで */}
  {/* othersここから */}
  <h2 id="others-head" data-sal="slide-left" data-sal-duration="500">others</h2>
  <div className="home__others" id="home__others-id">
    <div className="wrap__others">

      { data.others.edges.map(sum =>(
        <div className="home__others--summary" key={sum.node.id}>
        <time>{sum.node.publishDate}</time>
        <h3>{sum.node.title}</h3>
        <Link to={`/others/${sum.node.slug}/`} >
          <figure>
              <Img 
              fluid={ sum.node.eyecatch.fluid } 
              alt={ sum.node.eyecatch.description}
              style={{ height:"100%" }} 
              />
          </figure>
          </Link>
          <Link to={`/others/${sum.node.slug}/`} >詳細ページへ</Link>
        </div>
      ))}

    </div>
  </div>
  {/* othersここまで */}
  {/* blogここから */}
  <h2 id="blog-head" data-sal="slide-left" data-sal-duration="500">blog</h2>
  <div className="home__blog" id="home__blog-id">
    <div className="wrap__blog">

      { data.blog.edges.map((blog)=>(
        <article className="home__blog--post" key={blog.node.id}>
          <time>{ blog.node.publishDate }</time>
          <h3>{ blog.node.title }</h3>
          <Link to={`/blog/${blog.node.slug}/`} >
            <figure>
                <Img 
                fluid={ blog.node.eyecatch.fluid } 
                alt={ blog.node.eyecatch.description}
                style={{ height:"100%", width:"100%" }} 
                />
            </figure>
          </Link>
          <Link to={`/blog/${blog.node.slug}/`} >続きを読む</Link>
        </article>
      )) }
      
    </div>
    <div className="button">
        <div className="button--plime" ><Link to={`/blog/`} >ブログトップページへ</Link></div>
    </div>
  </div>
  {/* blogここまで */}
  {/* aboutここから */}
  <h2 id="about-head" className="home__about--headbg" data-sal="slide-left" data-sal-duration="500">about me</h2>
  <div className="home__about--bg">
    <div className="home__about" id="home__about-id">
      <h3>村松美紀</h3>
      <p>1992.11.5</p>
      <div className="about-img">
        <figure data-sal="slide-up">
          <Img fluid={ data.file.childImageSharp.fluid } />
        </figure>
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
