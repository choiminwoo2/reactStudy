import React from "react";


const MyParagraph = (props) =>{
    console.log("MyPagagraph RUNNING")
    return(
        <p>{props.children}</p>
    )
}

export default MyParagraph;