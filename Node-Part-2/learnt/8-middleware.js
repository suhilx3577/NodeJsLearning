const express = require('express')

const app = express()

const middleWare = (req,res,next) =>{
    const url = req.url
    const method = req.method
    const time = new Date().getFullYear()
    console.log(url,method,time)
    next()
}

app.get('/',middleWare,(req,res)=>{
    res.send('Home Page')
})

app.get('/about',middleWare,(req,res)=>{
    res.send('About Page')
})


app.listen(5000,()=>{
    console.log('listerning on server 5000...')
})