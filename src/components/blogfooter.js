import React from "react"

export default ()=>{
    return(
        <div>
            <div className="blog-footer">
                <div className="wrapper-contents flex">
                        <div>
                            <h4>カテゴリー一覧</h4>
                            <a>HTML5/</a><a>CSS3/</a><a>HTML5/</a><a>CSS3/</a><a>HTML5/</a><a>CSS3/</a>
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