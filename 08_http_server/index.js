const { error } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("Welcome to the home page");
    }else if(req.url == '/about'){
        res.write("About us page");
        res.end();
    }else {
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404! <br> page doen't exist</h1>");
    }
});

server.listen(3000, () => {
    console.log("listening to the port no 3000");
});