const EventEmitter = require("events");

const event = new EventEmitter();

event.on('sayMyName', () =>{
    console.log("your name is hari");
})
event.on('sayMyName', () =>{
    console.log("your name is mahek");
})

event.on('checkpage',(sc,mg)=>{
    console.log(`status code ${sc} and the page is ${mg}`)
})

event.emit('sayMyName');
event.emit("checkpage",200,"ok");
event.emit("checkpage",404,"error");



