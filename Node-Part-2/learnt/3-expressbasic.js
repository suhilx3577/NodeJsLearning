const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.write('<h1>Welcome to Home Page</h1>')
    res.end()
})

app.get('/about',(req,res)=>{
    res.write('<h1>Welcome to About Page</h1>')
    res.end()
})

app.all('*',(req,res)=>{
    res.write('<h1>Error Not Found</h1>')
    res.end()
})

app.listen(5000,()=>{
    console.log('listening on port 5000...')
})