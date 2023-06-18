import express from "express"
import cors from "cors"
import getAllRecipes from "./pgsql.js";

const app = express();

app.use(cors())

const port = 5000

// app.get("/all", (req, res) => {
//     res.json({ message : "All From Express" })
//     console.log("Serving all")
// })
app.get("/all", getAllRecipes)

app.get("/Random", (req, res) => {
    res.json({ message : "Random From Express" })
    console.log("Serving random")
})

app.get("/createrecipe", (req, res) => {
    res.json({ message : "Create New Recipe From Express" })
    console.log("Serving createrecipe")
})

app.listen(port, () => {
    console.info("Listening on port " + port)
})