const http = require('http')

//      NORMAL METHOD OF THIS
// const server = http.createServer((req,res)=>{
//     res.end('Hello World')
// })

// server.listen(5000)

//      BUT SERVER HAS ON AND IT EMITS AND REQUEST EVENT

const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('welcome again')
})

server.listen(5000)