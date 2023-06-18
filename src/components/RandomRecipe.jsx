import { React, useState, useEffect } from "react";

function RandomRecipes() {
    const [message, setMessage] = useState("")

    useEffect(() => {
      fetch("http://localhost:5000/random")
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
        console.log(data)
      })
    }, [])

    return(
        <div>
            <h1>Message: {message}</h1>
        </div>
    )
}

export default RandomRecipes