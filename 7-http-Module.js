const http =  require('http')

//  BASIC HTTP PLAY
// const server = http.createServer((req,res)=>{
//     res.write('Welcome to our Home Page')
//     res.end()
// })

// server.listen(5000)

//  ACTUAL LEARNING (BASIC)

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is Our Home Page")
    }
    
    if(req.url==='/about'){
        res.end("This is our About Page")
    }
    res.end(
    `<h3>OOPS!</h3>
    <p>The page you are looking for is not found</p>
    <a href="/"> Back Home</a>`
    )
})

server.listen(5000)