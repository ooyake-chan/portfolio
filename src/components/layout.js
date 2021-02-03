import React from "react"

import "./layout.scss"
import Header from "../components/header"
import Footer from "../components/footer"


export default ({local ,children})=>{
    return (
        <div>
            <Header local={ local }/>
                {children}
            <Footer />
        </div>
    )
}