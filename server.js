const express = require("express")

const app = express()

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("hellooooooo")
})

app.get("/messages", (req, res) => {
    res.send("<ul> <li> Hello Albert </li> </ul> ")

})

app.post("/messages", (req, res) => {
    console.log("update messages")
})



//naming the file server.js makes it run automatically without changing package.json