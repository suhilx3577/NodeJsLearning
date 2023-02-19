const {readFile,writeFile, read} = require('fs').promises


//ALTERNATIVE OPTION IS THIS 

// const util =  require('util')  
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await readFile('./content/first.txt') 
        const second = await readFile('./content/second.txt')
        await writeFile('./content/result2.txt',`This is Awesome : ${first} and ${second}`)
        console.log(first, second)       
    } catch (error) {
        console.log(error)
    }

}

start()