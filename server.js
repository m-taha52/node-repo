const express = require("express")

const app = express()

const PORT = 3000;

const friends = [{
        id: 0,
        name: "Ahmed",

    },
    {
        id: 1,
        name: "Ali",

    },
    {
        id: 2,
        name: "Sarah",

    }
]

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const ms = Date.now() - start
    console.log(`${req.method} ${req.url} ${ms}ms`)
})

app.use(express.json())

app.post(
    "/friends",
    (req, res) => {
        if (!req.body.name) {
            return res.status(400).json({
                error: "name is required"
            })
        }
        const newFriend = {
            name: req.body.name,
            id: friends.length
        }

        friends.push(newFriend);
        res.json(newFriend);

    })
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

app.get("/friends", (req, res) => {
    res.json(friends)
})

app.get("/friends/:friendId", (req, res) => {
    const friendId = Number(req.params.friendId)
    console.log(friendId)
    const friend = friends[friendId]
    res.json(friend)
})

app.get("/messages", (req, res) => {
    res.send("<ul> <li> Hello Albert </li> </ul> ")

})

app.post("/messages", (req, res) => {
    console.log("update messages")
})



//naming the file server.js makes it run automatically without changing package.json

//npm install <name of package> --save -dev is used to install the package in the dev dependencies section in package.json
//devdependencies are packages that are not absolutely required to run