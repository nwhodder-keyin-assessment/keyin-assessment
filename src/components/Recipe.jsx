import React from "react";

function Recipe(props) {
    return(
        <div style={{backgroundColor: "white"}}>
            <p>ID: {props.data.id}</p>
            <h1>Title: {props.data.title}</h1>
        </div>
    )
}

export default Recipe;