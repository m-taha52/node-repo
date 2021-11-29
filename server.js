 const express = require("express")

 const messagesRouter = require("./routes/messages.router")

 const friendsRouter = require("./routes/friends.router")

 const app = express()

 const PORT = 3000;

 app.use((req, res, next) => {
     const start = Date.now()
     next()
     const ms = Date.now() - start
         //in the earlier method, we were logging just the url which didnt work because of the router, now we are logging the base url + url
     console.log(`${req.method} ${req.baseUrl}${req.url} ${ms}ms`)
 })

 app.use(express.json())

 //mount the friends router 
 app.use("/friends", friendsRouter)
 app.use("/messages", messagesRouter)

 app.listen(PORT, () => { console.log(`Listening on ${PORT}`) })


 //naming the file server.js makes it run automatically without changing package.json

 //npm install <name of package> --save -dev is used to install the package in the dev dependencies section in package.json
 //devdependencies are packages that are not absolutely required to run

 //a router is used to organize our application into smaller routes, a router contains a collection of routes