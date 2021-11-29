function getMessages(req, res) {
    res.send("<ul> <li> Hello Albert </li> </ul> ")
}

function updateMessages(req, res) {
    console.log("update messages")
}

module.exports = {
    getMessages,
    updateMessages
}