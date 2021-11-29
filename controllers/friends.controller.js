const model = require("../models/friends.model")

function addFriends(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "name is required"
        })
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    }

    model.push(newFriend);
    res.json(newFriend);

}

function getFriends(req, res) {
    res.json(model)
}

function getIndividualFriend(req, res) {
    const friendId = Number(req.params.friendId)
    console.log(friendId)
    const friend = model[friendId]
    res.json(friend)
}

module.exports = {
    addFriends,
    getFriends,
    getIndividualFriend

}