
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

//  COMMENTED THIS After Pushing the index file into the public folder

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.get('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000,()=>{
    console.log('listening on port 5000')
})