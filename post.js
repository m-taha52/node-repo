const http = require("http");

const PORT = 3000;

//created a friends array
const friends = [{
        id: 1,
        name: "Ahmed",

    },
    {
        id: 2,
        name: "Ali",
    },
    {
        id: 3,
        name: "Sara",
    }
]


const server = http.createServer((req, res) => {

    //fetches the url thzt the user typed in and we will be parsing later
    const items = req.url.split("/");

    //loop checks if the url is equal to the friends array
    if (req.method === "POST" && items[1] === "friends") {

        req.on("data", (data) => {
            const friend = data.toString();
            console.log("Request", friend);
            const parsedFriend = JSON.parse(friend);
            friends.push(parsedFriend);
        })
    } else if (req.method === "GET" && items[1] === "friends") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        //if the url has 3 items, it means we are looking for a specific friend
        if (items.length === 3) {
            //from the typed url, we are converting the string index to a number
            const friendIndex = Number(items[2]);

            //we are printing the entire friends object from its index position
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === "GET" && items[1] === "messages") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>This is my first message</h1>")
        res.write("</body>")
        res.write("</html>")
        res.end()

    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

//each different url such as 
// - GET/friends/5
// - GET/friends/5/posts
//is an endpoint
// an endpoint is responsible for a specific piece of functionality