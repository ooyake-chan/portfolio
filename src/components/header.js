import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default ({ local })=>{
const data = useStaticQuery(graphql`
query {
  works:allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {category: {elemMatch: {category: {}, categorySlug: {eq: "works"}}}}) {
    edges {
      node {
        id
        slug
        title
      }
    }
  }
    others:allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {category: {elemMatch: {category: {}, categorySlug: {eq: "others"}}}}) {
    edges {
      node {
        id
        slug
        title
      }
    }
  }
}
`)

    return (
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <header>
          <h1><Link to="/">miki's portfolio</Link></h1>
            <input type="checkbox" id="nav__gloval--checkbox"  />
          <nav className="nav__gloval">
            <ul className="nav__gloval--primary-list">
              <li>
                <a href="http://localhost:8000/">トップページ /</a>
              </li>
              <li>
                <p>制作物 /</p>
                <ul className="nav__gloval--secondary-list">
                  {
                    data.works.edges.map( link =>(
                      <li key={link.node.id}><Link to={`/works/${link.node.slug}`}>{`${link.node.title}`}</Link></li>
                    ))
                  }
                </ul>
              </li>
              <li>
                <p>その他の制作物 /</p>
                <ul className="nav__gloval--secondary-list">
                {
                    data.others.edges.map( link =>(
                      <li key={link.node.id}><Link to={`/others/${link.node.slug}`}>{`${link.node.title}`}</Link></li>
                    ))
                  }
                </ul>
              </li>
              <li><a href="/blog/">ブログ /</a></li>
            </ul>
          </nav>
          <nav className="nav__local"> 
            { local }
            <label htmlFor="nav__gloval--checkbox">
              <span className="mobile-menu__button">menu open</span>
            </label>
          </nav>
        </header>
        </div>
    )
}