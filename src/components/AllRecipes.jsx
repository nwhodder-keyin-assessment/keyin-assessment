import { React, useState, useEffect } from "react";

function AllRecipes() {
    const [data, setData] = useState({})

    useEffect(() => {
      fetch("http://localhost:5000/all")
      .then(res => res.json())
      .then(data => {
        setData(data[0])
        console.log(data)
      })
    }, [])

    return(
        <div>
            <h1>ID: {data.id}</h1>
            <h1>Title: {data.title}</h1>
        </div>
    )
}

export default AllRecipes