 const express = require("express")
 const friendsController = require("./controllers/friends.controller")
 const messagesController = require("./controllers/messages.controller")
 const app = express()

 const PORT = 3000;



 app.use((req, res, next) => {
     const start = Date.now()
     next()
     const ms = Date.now() - start
     console.log(`${req.method} ${req.url} ${ms}ms`)
 })

 app.use(express.json())

 app.post("/friends", friendsController.addFriends)
 app.listen(PORT, () => { console.log(`Listening on ${PORT}`) })
 app.get("/friends", friendsController.getFriends)
 app.get("/friends/:friendId", friendsController.getIndividualFriend)

 app.get("/messages", messagesController.getMessages)
 app.post("/messages", messagesController.updateMessages)



 //naming the file server.js makes it run automatically without changing package.json

 //npm install <name of package> --save -dev is used to install the package in the dev dependencies section in package.json
 //devdependencies are packages that are not absolutely required to run