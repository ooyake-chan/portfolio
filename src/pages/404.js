import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default({location}) =>{
    return (
        <Layout>
            <SEO 
                pagetitle="404ページ"
                pagedesc="ページが見つかりません"
                pagepath={location.pathname}
            />
            <h2 style={{
                position:"absolute",
                top:"35vh"
                }}>
                    404
                <span style={{fontSize:"1rem"}}>
                    ページが見つかりません
                </span>    
            </h2>
        </Layout>
    )
}