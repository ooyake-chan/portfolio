import React from "react"

export default ()=>{
    return(
        <div>
            <div className="blog-footer">
                <div className="wrapper-contents flex">
                        <div>
                            <h3>カテゴリー一覧</h3>
                            <a>HTML5/</a><a>CSS3/</a><a>HTML5/</a><a>CSS3/</a><a>HTML5/</a><a>CSS3/</a>
                        </div>
                        <div>
                            <h3>月別記事</h3>
                            <section>
                                <h4>2021年</h4>
                                <a>1月</a>
                            </section>
                            <section>
                            <h4>2020年</h4>
                            <a>12月</a><a>11月</a><a>10月</a>
                            </section>
                        </div>
                </div>
            </div>
        </div>
    )
}