const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res) =>{
    // fs.readFile('input.txt', (err,data) =>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });

    
    // method-1(stream)
    // const rstream = fs.createReadStream('input.txt');
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // })
    // rstream.on("error",(err) =>{
    //     console.log(err);
    //     res.write("file not found")
    //     res.end();
    // })

    // method-2(stream)
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);



});

server.listen(3000);