import pg from "pg"
import config from "./credentials.json" assert {type: "json"}

const pool = new pg.Pool(config)

function getAllRecipes(req, res) {
    pool.query("SELECT * FROM recipes", (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

export default getAllRecipes