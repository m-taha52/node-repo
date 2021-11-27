const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/friends") {

        // res.writeHead(200, {
        //     "Content-Type": "application/json",
        // });
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            name: "Mohammed Taha",
            age: "21",
        }));
    } else if (req.url === "/messages") {
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