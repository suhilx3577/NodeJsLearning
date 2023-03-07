const express = require('express')
const {products} = require('./data.js')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

// Query String Set UP
app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.send(newProduct)
})

// Route params set Up
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params

    const singleProduct = products.find(
        (product)=>product.id === Number(productID)
    )
    if(!singleProduct) res.status(404).send('<h4>Page Not Found</h4>')
    res.send(singleProduct)
    console.log(singleProduct)
})

app.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})