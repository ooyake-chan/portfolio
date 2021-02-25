import React from "react"
import { graphql,useStaticQuery, Link } from "gatsby"

export default ()=>{
    const data = useStaticQuery(graphql`
    query {
        allContentfulCategory {
          edges {
            node {
              categorySlug
              category
            }
          }
        }
      }
    `)
    return(
        <div>
            <div className="blog-footer">
                <div className="wrapper-contents flex">
                        <div>
                            <h4>カテゴリ一覧</h4>
                            <div className="cat-list">
                                <ul>
                                    { data.allContentfulCategory.edges.map((cat) => (
                                            (cat.node.categorySlug === "works" || cat.node.categorySlug === "others") ||
                                        <li key={cat.node.categorySlug}>
                                            <Link to={`/cat/${ cat.node.categorySlug }/`} >{ cat.node.category }/</Link>
                                        </li>
                                    )) }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4>月別記事</h4>
                            <section>
                                <h5>2021年</h5>
                                <a>1月</a>
                            </section>
                            <section>
                            <h5>2020年</h5>
                            <a>12月</a><a>11月</a><a>10月</a>
                            </section>
                        </div>
                </div>
            </div>
        </div>
    )
}