const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/userapi.json`, "utf-8");
    const objData = JSON.parse(data);

    if (req.url == '/') {
        res.end("Welcome to the home page");
    } else if (req.url == '/about') {
        res.write("About us page");
        res.end();
    } else if (req.url == '/userAPI') {
        res.writeHead(200, {"contenst-type":"application/json"})
        res.end(objData[5].name);
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404! <br> page doen't exist</h1>");
    }
});

server.listen(3000, () => {
    console.log("listening to the port no 3000");
});