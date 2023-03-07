const { urlencoded } = require('express')
const express = require('express')
const {people} =  require('./data.js')
const app = express()

app.use(express.static('./methods-public'))
app.use(urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide Name Vaue'})
    }
    return res.status(200).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name}= req.body
    if(!name){
        res.status(400).json({success:false,msg:'Please Provide a Name'})
    }

    return res.status(200).json({success:true,person:[...people,name]})
})

app.post('/login',(req,res)=>{
    const {name} = req.body
    // console.log(name)
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})


app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data: people})
})



app.listen(5000,()=>{
    console.log('listening on port 5000...')
})