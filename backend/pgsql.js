import pg from "pg"
import config from "./credentials.json" assert {type: "json"}

const pool = new pg.Pool(config)

function getAllRecipes(req, res) {
    console.log("Serving All")
    pool.query("SELECT * FROM recipes", (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

function getRandomRecipe(req, res) {
    console.log("Serving Random")
    pool.query("SELECT * FROM recipes ORDER BY random() LIMIT 1;", (error, results) => {
        //  This will need to change as it will be really slow with larger data sets, but works for now!
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

export default {getAllRecipes, getRandomRecipe}