import React from "react"

function Tool(props){
    return(
        <>
            <div className="tool_container">
                <img src= {props.img} className="tool_img"/>
                <h3> {props.tooltext} </h3>
                <p> {props.toolcontext}</p>
            </div>
        </>
    )
}

export default Tool