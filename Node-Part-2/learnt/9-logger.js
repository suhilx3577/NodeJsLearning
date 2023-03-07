const express = require('express')
const app = express()

const logger = require('./logger.js')

app.use(logger)


app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/api/products',(req,res)=>{
    res.send('Products Page')
})

app.get('/api/items',(req,res)=>{
    res.send('Items Page')
})

app.listen(5000,()=>{
    console.log('listerning on server 5000...')
})