const express = require('express');

const friendsController = require("../controllers/friends.controller")

const friendsRouter = express.Router()

friendsRouter.use((req, res, next) => {
    console.log(req.ip, "is accessing the friends router")
    next()
});

friendsRouter.post("/", friendsController.addFriends)
friendsRouter.get("/", friendsController.getFriends)
friendsRouter.get("/:friendId", friendsController.getIndividualFriend)

module.exports = friendsRouter;