import { React, useState, useEffect } from "react";
import Recipe from "./Recipe";

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
            <Recipe data={data} />
        </div>
    )
}

export default AllRecipes