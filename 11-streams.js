//      USED TO CREATE A BIG FILE
// const {writeFileSync} = require('fs')

// for(let i=0;i<10000;i++){
//     writeFileSync('./content/big.txt',`hello world ${i} \n`,{flag:'a'})
// }


//      BASIC PRACTISE OF THE STREAM
// const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt')

// stream.on('data',(result)=>{
//     console.log(`the size of the file is ${result.length}`)
// })



//      WEB OR REAL KIND OF PRACTISE 


// if passed the file like this the data would be large and file is sent at once which wont be effective 
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//     const text = fs.readFileSync('./content/big.txt','utf8')
//     res.end(text)
// })

// server.listen(5000)


//  REFACTORING THE ABOVE FUNCTION

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const fileStream = fs.createReadStream('./content/big.txt','utf8')

    fileStream.on('open',()=>{
        fileStream.pipe(res)    // we cannot use res.end(result) or anykind of stuff

    })

    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

server.listen(5000)