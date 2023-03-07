const http = require('http')
const {readFileSync} = require('fs')

const htmlFile= readFileSync('./index.html')

const server =  http.createServer((req,res)=>{
    // console.log('user hit the server')
    // console.log(req)
    const url = req.url
    if(url==='/' || url==='/home'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(htmlFile)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Welcome to About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h2>Error Page Not Found</h2>')
        res.end()
    }
})

server.listen(5000)