import express from 'express'
import cors from "cors"

const app = express();

app.use(cors())
// app.use(express.json())

const port = 5000

app.get("/message", (req, res) => {
    res.json({ message : "Hello From Express" })
    console.log("Serving message")
})

app.listen(port, () => {
    console.info("Listening on port " + port)
})