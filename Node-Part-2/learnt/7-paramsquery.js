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

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query
    // console.log(req.params)
    let sortedProducts = [...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts<1){
        return res.status(200).json({success:true,data:[]})
    }

    res.status(200).json(sortedProducts)

})

app.listen(5000, ()=>{
    console.log('server listening on port 5000...')
})